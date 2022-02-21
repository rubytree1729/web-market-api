import express, { ErrorRequestHandler } from 'express'
import cors from 'cors'
import logger from "morgan"
import mongoose from "mongoose"
import routes from './src/routes'

const app = express()
const corsOptions = { // CORS 옵션
    origin: 'http://localhost:3000',
    credentials: true
}
const CONNECT_URL = 'mongodb://localhost:27017/test'
mongoose.connect(CONNECT_URL).then(() => console.log("mongodb connected ..."))
    .catch(e => console.log(`failed to connect mongodb: ${e}`))
app.use(cors(corsOptions)) // CORS 설정
app.use(express.json()) // request body 파싱
app.use(logger("dev")) // Logger 설정
app.use("/api", routes) // api 라우팅
app.get('/hello', (req, res) => { // URL 응답 테스트
    res.send('hello world !')
})
app.use((req, res, next) => {  // 사용자가 요청한 페이지가 없는 경우 에러처리
    res.status(404).send("Sorry can't find page")
})
app.use(((err, req, res, next) => { // 서버 내부 오류 처리
    console.error(err.stack)
    res.status(500).send("something is broken on server !")
}) as ErrorRequestHandler)
app.listen(5000, () => { // 5000 포트로 서버 오픈
    console.log('server is running on port 3000 ...')
})
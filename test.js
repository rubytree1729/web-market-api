const CONNECT_URL = 'mongodb://localhost:27017/test'
const OPTIONS = { // Mongo DB 서버 연결
    useNewUrlParser: true,
    useUnifiedTopology: true
}


var mongoose = require('mongoose')
mongoose.connect(CONNECT_URL).then(() => console.log("mongodb connected ..."))
    .catch(e => console.log(`failed to connect mongodb: ${e}`))
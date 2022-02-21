import { model, Schema } from 'mongoose'
import Todo from './Todo'

interface User extends Document {
    name: String,
    age: Number,
    email: String,
    todos: Array<Todo>
}

const userSchema = new Schema<User>({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, trim: true },
    todos: { type: [Todo], required: true }
})
const User = model('User', userSchema, "userData") // 스키마로부터 생성된 모델 객체

export default User
// module.exports = User;
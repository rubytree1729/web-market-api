import { model, Schema } from 'mongoose';

interface Todo extends Document {
    name: String,
    done?: Boolean,
    description: String
}

const todoSchema = new Schema<Todo>({
    name: { type: String, required: true, trim: true },
    done: { type: Boolean, default: false },
    description: { type: String, required: true, trim: true }
})
const Todo = model<Todo>('Todo', todoSchema, 'todoData') // 스키마로부터 생성된 모델 객체
export default Todo
// module.exports = Todo;
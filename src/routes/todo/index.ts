import express from 'express'
import { Callback, HydratedDocument, Model } from 'mongoose'
import Todo from "../../models/Todo"


const TodoRouter = express.Router()
TodoRouter.route('/').get((req, res) => {
    Todo.find({}, (error, result) => {
        if (error) {
            res.json({ status: 204, error })
        }
        else {
            res.json({ status: 200, result })
        }
    })
})
TodoRouter.route('/:id').get((req, res) => {
    Todo.findOne({ _id: req.params.id }, ((error, result) => {
        if (error) {
            res.json({ status: 204, error })
        }
        else {
            res.json({ status: 200, result })
        }
    }) as Callback)
})
TodoRouter.route('/:id').put((req, res) => {
    Todo.findByIdAndUpdate()
    Todo.findOne({ _id: req.params.id }, ((error, result) => {
        if (error) {
            res.json({ status: 204, error })
        }
        else {
            res.json({ status: 200, result })
        }
    }) as Callback)
})
TodoRouter.route('/').post((req, res) => {
    console.log(`name: ${req.body.name}`)
    Todo.findOne({ name: req.body.name, done: false }, (async (error, result) => {
        if (error) throw error
        if (!result) {
            const newTodo: HydratedDocument<Todo> = new Todo(req.body)
            await newTodo.save().then(value => {
                res.json({ status: 201, msg: "new result created in db!", value })
            }, reason => {
                res.json({ status: 203, msg: "fail to save in db!", reason })
            }
            )
        } else {
            res.json({ status: 204, msg: "this result already exists in db!" })
        }
    }) as Callback)
})
TodoRouter.route('/:id').put((req, res) => {
    res.send(`result put ${req.params.id}`)
})
TodoRouter.route('/:id').delete((req, res) => {
    res.send(`result put ${req.params.id}`)
})
export default TodoRouter
// module.exports = TodoRouter
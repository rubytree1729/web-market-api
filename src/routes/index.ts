import express from 'express'
import todo from './todo'


const router = express.Router()
router.use('/todos', todo)
export default router
// module.exports = router
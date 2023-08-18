import express from 'express';
import todoItemController from '../controllers/todoItemController';

const router = express.Router();

// search for list of todo items with matching parameters
router.get('/search', 
todoItemController.search()
)

// view todo item
router.get('/', 
todoItemController.getTodos())

// create todo item
router.post('/', 
todoItemController.createTodo())

// update todo item
router.patch('/', 
todoItemController.updateTodo())

// delete todo item
router.delete('/', 
todoItemController.deleteTodo())

export default router;
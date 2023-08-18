import express from 'express';
import todoItemController from '../controllers/todoItemController';
import credentialsController from '../controllers/credentialsController';

const router = express.Router();

// search for list of todo items with matching parameters
router.get('/search', 
credentialsController.authenticate(),
todoItemController.search()
)

// view todo item
router.get('/', 
credentialsController.authenticate(),
todoItemController.getTodos())

// create todo item
router.post('/', 
credentialsController.authenticate(),
todoItemController.createTodo())

// update todo item
router.patch('/', 
credentialsController.authenticate(),
todoItemController.updateTodo())

// delete todo item
router.delete('/', 
credentialsController.authenticate(),
todoItemController.deleteTodo())

export default router;
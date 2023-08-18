import express from 'express';
import TodoItem from '../models/todoitem.js'
import { Op } from 'sequelize';

const router = express.Router();

// search for list of todo items with matching parameters
router.get('/search', async (req, res) => {
    const {title, category, description, ownerId, todoId} = req.body
    try {
        const todoItems = await TodoItem.findAll(
            {
                where: {
                  [Op.or]: [
                    { title: title },
                    { category: category },
                    { description: { [Op.like]: `%${description}%` } },
                    { ownerId: ownerId },
                    { todoId: todoId }
                  ]
                }
              }
        );
        res.status(200).json(todoItems);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
})

// view todo item
router.get('/', async (req, res) => {
    const {todoId} = req.body
    try {
        const todo = await TodoItem.findByPk(todoId);
        if (!todo) {
            res.status(404).send('Not found');
        }
        res.status(200).json(todo);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
})

// create todo item
router.post('/', async (req, res) => {
    try {
        const { title, category, description, ownerId } = req.body;

        const newTodoItem = await TodoItem.create({
            title,
            category,
            description,
            ownerId
        });

        res.status(201).json(newTodoItem);

    } catch (error) {
        console.error("Error creating a new Todo:", error);
        res.status(500).send('Server error');
    }
})

// update todo item
router.patch('/', async (req, res) => {
    try {
        const {title, category, description, ownerId, todoId} = req.body;

        const [updatedRowsCount] = await TodoItem.update({
            title: title,
            category: category,
            description: description}, 
            {
                where: {
                    todoId: todoId,
                    ownerId: ownerId  // Ensures that only the owner can delete the TodoItem
            }
        });

        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'Todo not found or invalid permissions.' });
        }

        res.status(200).json({ message: 'Todo updated successfully.' });

    } catch (error) {
        console.error("Error updating the Todo:", error);
        res.status(500).send('Server error');
    }
})

// delete todo item
router.delete('/', async (req, res) => {
    try {
        const { ownerId, todoId } = req.body; 

        const deletedRowsCount = await TodoItem.destroy({
            where: {
                todoId: todoId,
                ownerId: ownerId  // Ensures that only the owner can delete their TodoItem
            }
        });

        if (deletedRowsCount === 0) {
            return res.status(404).json({ message: 'Todo not found or invalid permission.' });
        }

        res.json({ message: 'Todo deleted successfully.' });

    } catch (error) {
        console.error("Error deleting the Todo:", error);
        res.status(500).send('Server error');
    }
})

export default router;
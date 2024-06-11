import { Router } from 'express';
import { getTodos, getTodoById, addTodo, updateTodo, deleteTodo } from './todoController';

const router = Router();

router.get('/', getTodos);
router.get('/:id', getTodoById);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;

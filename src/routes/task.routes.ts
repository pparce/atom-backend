import { Router } from 'express';
import * as TaskController from '../controllers/task.controller';

const router = Router();

// GET todas las tareas de un usuario
router.get('/tasks/:userId', TaskController.getAll);

// POST crear una nueva tarea
router.post('/tasks', TaskController.create);

// PUT actualizar una tarea existente
router.put('/tasks/:id', TaskController.update);

// DELETE eliminar una tarea existente
router.delete('/tasks/:id', TaskController.remove);

export default router;

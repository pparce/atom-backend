import { Router } from 'express';
import * as TaskController from '../controllers/task.controller';

const router = Router();

// GET todas las tareas de un usuario
router.get('/:userId', TaskController.getAll);

// POST crear una nueva tarea
router.post('/', TaskController.create);

// PUT actualizar una tarea existente
router.put('/:id', TaskController.update);

// DELETE eliminar una tarea existente
router.delete('/:id', TaskController.remove);

export default router;

import { Router } from 'express';
import * as TaskController from '../controllers/task.controller';
import { validate } from '../middlewares/validate';
import { taskSchema } from '../schemas/task.schema';

const router = Router();

// GET todas las tareas de un usuario
router.get('/:userId', TaskController.getAll);

// POST crear una nueva tarea
router.post('/', validate(taskSchema), TaskController.create);

// PUT actualizar una tarea existente
router.put('/:id', validate(taskSchema), TaskController.update);

// PATCH actualizar parcialmente una tarea existente
router.patch('/:id', TaskController.partialUpdate);

// DELETE eliminar una tarea existente
router.delete('/:id', TaskController.remove);

export default router;

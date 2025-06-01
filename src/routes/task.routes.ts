import { Router } from 'express';
import * as TaskController from '../controllers/task.controller';
import { validate } from '../middlewares/validate';
import { taskSchema } from '../schemas/task.schema';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: Endpoints para gestión de tareas
 */

/**
 * @swagger
 * /tasks/{userId}:
 *   get:
 *     summary: Obtener todas las tareas de un usuario
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de tareas del usuario
 */
router.get('/:userId', TaskController.getAll);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tareas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarea'
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post('/', validate(taskSchema), TaskController.create);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Actualizar completamente una tarea existente
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarea'
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 */
router.put('/:id', validate(taskSchema), TaskController.update);

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Actualizar parcialmente una tarea existente
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Campos que se desean actualizar
 *     responses:
 *       200:
 *         description: Tarea actualizada parcialmente
 */
router.patch('/:id', TaskController.partialUpdate);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea existente
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada
 */
router.delete('/:id', TaskController.remove);

export default router;

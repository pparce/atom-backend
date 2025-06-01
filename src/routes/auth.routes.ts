import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Endpoints para login y registro de usuarios
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@email.com
 *     responses:
 *       200:
 *         description: Sesión iniciada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Usuario no encontrado o inválido
 */
router.post('/login', UserController.login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: nuevo@email.com
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *       400:
 *         description: Datos inválidos o usuario ya registrado
 */
router.post('/register', UserController.register);

export default router;

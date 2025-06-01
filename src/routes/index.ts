import { Router } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import authRoutes from './auth.routes';
import taskRoutes from './task.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/tasks', authenticateToken,  taskRoutes);

export default router;

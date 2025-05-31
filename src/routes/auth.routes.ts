import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = Router();

router.post('/auth/login', UserController.login);

export default router;

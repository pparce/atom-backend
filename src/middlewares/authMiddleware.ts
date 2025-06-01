import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as UserService from '../services/user.service';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const authenticateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string, email: string };

        // Validación adicional: verificar que el usuario aún existe
        const user = await UserService.findUserByEmail(decoded.email);
        if (!user) {
            res.status(401).json({ error: 'Usuario inválido' });
            return;
        }

        (req as any).user = user;
        next();
    } catch (err) {
        res.status(403).json({ error: 'Token inválido' });
    }
};

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as UserService from '../services/user.service';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const login = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: 'Email es requerido' });
        return;
    }

    let user = await UserService.findUserByEmail(email);

    if (!user) {
        res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const token = jwt.sign({ id: user?.id, email: user?.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login exitoso', user, token });
};

export const register = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: 'Email es requerido' });
        return;
    }

    const user = await UserService.createUser(email);
    const token = jwt.sign({ id: user?.id, email: user?.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'Usuario creado', user, token });
};

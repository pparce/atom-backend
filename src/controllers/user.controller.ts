import { Request, Response } from 'express';
import * as UserService from '../services/user.service';

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

    res.status(200).json({ message: 'Login exitoso', user });
};

export const register = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: 'Email es requerido' });
        return;
    }

    const user = await UserService.createUser(email);
    res.status(201).json({ message: 'Usuario creado', user });
};

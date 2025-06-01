import { z } from 'zod';

export const taskSchema = z.object({
    title: z.string({
        required_error: 'El título es obligatorio',
        invalid_type_error: 'El título debe ser un texto'
    }).min(1, 'El título es requerido'),
    description: z.string().optional(),
    createdAt: z.string().datetime('Formato de fecha inválido'),
    completed: z.boolean(),
    userId: z.string().min(1, 'userId es requerido')
});
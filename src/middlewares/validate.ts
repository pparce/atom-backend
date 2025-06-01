import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validate = (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction): void => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            const firstError = Object.values(fieldErrors).flat()[0] || 'Error de validación';
            res.status(400).json({ errors: firstError });
            return;
        }

        req.body = result.data;
        next();
    };

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

export const corsOptions: cors.CorsOptions = {
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

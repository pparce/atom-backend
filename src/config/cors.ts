import { CorsOptions } from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:4200",
    "https://api-e7sshnd4va-uc.a.run.app",
    "https://atom-pedropablo.web.app"
];

export const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS: " + origin));
        }
    },
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true 
};
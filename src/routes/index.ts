import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const routesPath = __dirname;

// Leer todos los archivos de la carpeta excepto este mismo (index.ts)
fs.readdirSync(routesPath)
    .filter(file => file !== 'index.ts' && file.endsWith('.ts'))
    .forEach(file => {
        const routeModule = require(path.join(routesPath, file));
        // Asumimos que el archivo exporta por default un Router
        router.use(routeModule.default);
    });

export default router;

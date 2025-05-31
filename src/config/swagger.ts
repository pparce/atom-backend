const swaggerJSDoc = require('swagger-jsdoc');

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task API',
            version: '1.0.0',
            description: 'Documentación de la API de tareas con login y CRUD',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['src/routes/*.ts'], // archivos donde están las rutas documentadas
});

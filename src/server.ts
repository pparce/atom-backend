import cors from "cors";
import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { corsOptions } from "./config/cors";
import { swaggerSpec } from "./config/swagger";
import apiRoutes from "./routes";

const app = express();


app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", apiRoutes);

app.use(express.static(path.join(__dirname, "../public")));



if (process.env.NODE_ENV !== "production") {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
}


export default app;

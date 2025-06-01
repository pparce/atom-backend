import * as functions from "firebase-functions";
import app from "./server";

// Exportá como función HTTP para Firebase
export const api = functions.https.onRequest(app);
import Express from "express";
import { router } from "./routes/routes";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = Express();

app.use(router);

const erroProposital: number = "isto vai quebrar o build";

export { app };

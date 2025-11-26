import express from 'express';

const app = express();
import { Request, Response } from 'express';
import { bloodRequestRouter } from './modules/bloodRequest/bloodRequest.route';
app.use(express.json());

app.use("/api/v1/blood-requests", bloodRequestRouter);

app.get("/", (req: Request, res: Response) =>{
    res.send("Welcome to Blood Care Server");
} )

export default app;
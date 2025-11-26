import express from 'express';

const app = express();
import { Request, Response } from 'express';
app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    res.send("Welcome to Blood Care Server");
} )

export default app;
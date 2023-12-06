import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

//parsers
app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const a = 10;

  console.log(a);
  // res.send("Hello World!");
  res.send(a);
});

export default app;
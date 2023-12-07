import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  // res.send("Hello World!");
  res.status(200).json({
    status: "success",
    message: "Welcome to FlyCtg Tours & Travels",
  });
});

app.get("/api/v1/users", (req: Request, res: Response) => {
  const user = [
    {
      id: 1,
      name: "Hemel",
      email: "hemel@gmail.com",
    },
    {
      id: 2,
      name: "sakib",
      email: "sakib@gmail.com",
    },
    {
      id: 3,
      name: "habib",
      email: "habib@gmail.com",
    },
  ];
  res.status(200).json({
    status: "success",
    data: user,
  });
});

export default app;

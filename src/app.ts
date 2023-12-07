import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

const userRoute = express.Router();
//.use work as middleware
userRoute.use("/all-users", (req, res) => {
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
    {
      id: 4,
      name: "tabib",
      email: "tabib@gmail.com",
    },
  ];
  res.status(200).json({
    status: "success",
    data: user,
  });
});

app.use("/api/v1/users", userRoute);

//test
app.get("/", (req: Request, res: Response) => {
  // res.send("Hello World!");
  res.status(200).json({
    status: "success",
    message: "Welcome to FlyCtg Tours & Travels",
  });
});

export default app;

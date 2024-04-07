import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Welcome to the server",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.json({
    status: httpStatus.NOT_FOUND,
    message: "Routes Not Found",
    path: req.path,
  });
});

export default app;

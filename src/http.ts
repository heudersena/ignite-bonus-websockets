import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://192.168.1.121:1195/rocketsocket");

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: "*" } });
io.on("connection", socket => console.log(socket.id))
// Configurações padrões
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "src", "tmp")));

// Configuraçães errors
app.get("*", (request: Request, response: Response, next: NextFunction) => {
  throw new Error("NotFound");
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
);

export { serverHttp, io };

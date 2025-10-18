import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import showRouter from "./router/showRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://box-office-ayush-3012.vercel.app",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

mongoose
  .connect(uri)
  .then((res) =>
    console.log(
      "Mongoose connected to : ",
      res.connection.name,
      " HOST !!! ",
      res.connection.host
    )
  )
  .catch((err) => console.log(err));

app.use("/", showRouter);

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});

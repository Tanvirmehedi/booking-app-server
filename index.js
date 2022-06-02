import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import usersRouter from "./routes/users.js";
const app = express();
dotenv.config();

const port = 5000 || process.env.PORT;

// MONGOOSE connection

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDb connected");
});

// API MIDDLEWARE
app.use(express.json());

app.use("/auth", authRouter);
app.use("/hotels", hotelsRouter);
app.use("/rooms", roomsRouter);
app.use("/users", usersRouter);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something is wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(port, () => {
  connect();
  console.log(`Connect to backend Port ${port}`);
});

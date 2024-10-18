import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";

dotenv.config();

const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// Routes


app.use("/api"  , router)

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

startServer();

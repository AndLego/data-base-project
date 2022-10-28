import mongoose from "mongoose";
import * as dotev from "dotenv";

dotev.config();

const MONGODB_URI = process.env.DATABASE_URL;

export const connect = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((err) => {
      console.error("error connection to MongoDB", err.message);
    });
};

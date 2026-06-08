import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 ");
});

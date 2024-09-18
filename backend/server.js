import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";
import productRoutes from "./routes/product.route.js";
import path from "path";



dotenv.config();
const PORT = process.env.PORT || 5000;
const jsonParser = bodyParser.json();
const app = express();
app.use(express.json());
const __dirname = path.resolve();
app.use("/api/products", productRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});



app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`)
});


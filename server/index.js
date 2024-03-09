import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import cors from "cors";
import mainRoutes from "./routes/index.js"

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json())

// routes
app.use("/",mainRoutes);

// connection
connectdb();



const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/userRoutes");
const githubRoutes = require("./routes/githubRoutes");
const historyRoutes = require("./routes/historyRoutes");

const app = express();

///Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Database
connectDb();

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.use("/api/github", githubRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/auth", authRoutes);


app.listen(5000, () => {
    console.log("Server running on port 5000");
});
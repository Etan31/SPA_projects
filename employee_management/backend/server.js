require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { pool } = require('./db/pool');
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth"); // ✅ Correct path based on your structure

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
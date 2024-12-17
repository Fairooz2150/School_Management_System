const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS middleware
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const libraryRoutes = require("./routes/libraryRoutes");
const feesRoutes = require("./routes/feesRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/library", libraryRoutes);
app.use("/api/fees", feesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

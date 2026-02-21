const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());

// ✅ EJS setup
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected"));

app.use("/api/auth", authRoutes);

// ✅ HOME PAGE ROUTE (EJS)
app.get("/home", (req, res) => {
  const email = req.query.email; // temporary (explained below)
  res.render("home", { email });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

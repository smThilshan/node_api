const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
// Middleware
const app = express();
app.use(express.json());

// Routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello From Node API Update!");
});


mongoose
  .connect(
    "mongodb+srv://smthilshan:admin123@backenddb.mua12.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log("Connection  Failed");
  });

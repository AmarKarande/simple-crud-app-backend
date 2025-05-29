const express = require("express");
// import mongoose from 'mongoose';
const Product = require("./models/product.model.js");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World from Server");
});

mongoose
  .connect(
    "mongodb+srv://admin:Admin%401234@backenddb.yq4tnbc.mongodb.net/Crud_Api?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Connection Failed!", err);
  });

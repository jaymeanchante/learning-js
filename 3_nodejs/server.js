// # 2. Creating the structure
// `npm init -y`
// `npm install express`

// # 3.  Using nodemon
// `npm install -D nodemon`
// create a new script entry in the package.json
// `nodemon server.js`
// now we can use `npm run dev`

// # 4. Installing MongoDB using docker
// docker pull mongo:latest
// docker run --name mongodb -p 27017:27017 -d mongo

// # 5. Conecting to MongoDB
// npm install mongoose

// # 6. Creating the product model
// src/models/Product.js
// `npm install require-dir`
// so we don't have have to require each specific file

const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// initializing the app
const app = express();

// conecting to MongoDB
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
requireDir("./src/models/");

const Product = mongoose.model("Product");

// first route
app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "https://github.com/facebook/react-native"
  });
  return res.send("Hello world!")
})
app.listen(3001);
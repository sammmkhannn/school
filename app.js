const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schoolRoutes = require("./routes/schools");
const app = express();

const PORT = process.env.PORT || 8080;

//using the body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//the home route
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Explore Schools in Gilgit</h1>");
  res.send();
});

//school routes
app.use("/schools", schoolRoutes);
//database connection
mongoose.connect(
  //'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.eivgz.mongodb.net/schools?retryWrites=true&w=majority',
  "mongodb://localhost:27017/schools",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//testing connection
const db = mongoose.connection;
db.on("error", (error) => {
  console.log("Can't be connected to mongoDB");
});
db.once("open", () => {
  console.log("connected to mongodb");
});

//listening on the port
app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});

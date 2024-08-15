const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

const dataSchema = {
  id: [
    { username: String,
      password: String },
    {
      username: String,
      password: String,
    }
  ]
};

mongoose
  .connect(
    "mongodb+srv://Nandha:Nandhapg9@cluster0.9ultbdv.mongodb.net/lms-database?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch(() => {
    console.log("FAILED TO CONNECT WITH DB");
  });

const lms_database = mongoose.model("credential", dataSchema, "lms-database");

app.get("/", (req, res) => {
  lms_database.find().then((retdata) => {
    console.log(retdata);
    res.send(retdata);
  });
});

app.listen(5000, () => {
  console.log("SERVER STARTED");
});

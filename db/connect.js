const mongoose = require("mongoose");

const connectDB = async url => {
  return mongoose.connect(url).then(() => {
    console.log("Connected to the dabatabase");
  });
};

module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async url => {
  return mongoose.connect(url).then(() => {
    console.log("Connected to the dabatabase");
  }).catch((e) => {console.log(e)});
};

module.exports = connectDB;

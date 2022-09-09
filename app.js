const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasksRoutes");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMidlleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);

app.use(notFound);
app.use(errorHandlerMidlleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listenning on port: ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();

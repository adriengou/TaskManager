const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasksRoutes");
const connectDB = require("./db/connect");

require("dotenv").config();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "ok",
  });
});

app.use("/api/v1/tasks", tasksRouter);

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

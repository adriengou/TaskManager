const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasksRoutes");

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
app.listen(port, () => {
  console.log(`Server is listenning on port: ${port}`);
});

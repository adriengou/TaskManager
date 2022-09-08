exports.getAllTasks = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All tasks",
  });
};

exports.postNewTask = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Post new task",
  });
};

exports.getOneTask = (req, res) => {
  res.status(200).json({
    status: "success",
    // message: "Here is your task",
    message: req.body,
  });
};

exports.updateTask = (req, res) => {
  res.send("update task");
};

exports.deleteTask = (req, res) => {
  res.send("delete task");
};

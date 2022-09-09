const Task = require("../models/tasksModels");
const asyncWrapper = require("../middleware/async");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({
    status: "success",
    data: {
      tasks,
    },
  });
});

exports.postNewTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    status: "success",
    data: task,
  });
});

exports.getOneTask = asyncWrapper(async (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    const task = await Task.findById(req.params.id);
    if (task === null) {
      const err = new Error("No task found with that id");
      err.status = 404;
      next(err);
    } else {
      res.status(200).json({
        status: "success",
        data: task,
      });
    }
  } else {
    const err = new Error("No a correct ID format");
    err.status = 404;
    next(err);
  }
});

// exports.updateTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!task) {
//       throw "No task found with that id";
//     }
//     res.status(200).json({
//       status: "success",
//       data: req.body,
//     });
//   } catch (err) {
//     res.status(500).json({
//       err,
//     });
//   }
// };

exports.updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    const err = new Error("No task found with that id");
    err.status = 404;
  }
  res.status(200).json({
    status: "success",
    data: req.body,
  });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (task === null) {
      const err = new Error("No task found with that id");
      err.status = 404;
    } else {
      res.status(200).json({
        status: "success",
        data: null,
      });
    }
  } else {
    const err = new Error("No a correct ID format");
    err.status = 404;
  }
});

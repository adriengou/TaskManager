const Task = require("../models/tasksModels");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customs");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     tasks,
  //   },
  // });
  res.status(200).json({ tasks });
});

exports.postNewTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  // res.status(201).json({
  //   status: "success",
  //   data: task,
  // });
  res.status(201).json({ task });
});

exports.getOneTask = asyncWrapper(async (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    const task = await Task.findById(req.params.id);
    if (task === null) {
      return next(createCustomError(`No task found with that id`, 404));
    } else {
      // res.status(200).json({
      //   status: "success",
      //   data: task,
      // });
      res.status(200).json({ task });
    }
  } else {
    return next(createCustomError(`No a correct ID format`, 404));
  }
});

exports.updateTask = asyncWrapper(async (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (task === null) {
      return next(createCustomError(`No task found with that id`, 404));
    } else {
      // res.status(200).json({
      //   status: "success",
      //   data: req.body,
      // });
      res.status(201).json({ task });
    }
  } else {
    return next(createCustomError(`No a correct ID format`, 404));
  }
});

exports.deleteTask = asyncWrapper(async (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (task === null) {
      return next(createCustomError(`No task found with that id`, 404));
    } else {
      // res.status(200).json({
      //   status: "success",
      //   data: null,
      // });
      res.status(200).json({ task });
    }
  } else {
    return next(createCustomError(`No a correct ID format`, 404));
  }
});

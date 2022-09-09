const Task = require("../models/tasksModels");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.postNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.getOneTask = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const task = await Task.findById(req.params.id);
      if (task === null) {
        throw "No task found with that id";
      } else {
        res.status(200).json({
          status: "success",
          data: task,
        });
      }
    } else {
      throw "No a correct ID format";
    }
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      throw "No task found with that id";
    }
    res.status(200).json({
      status: "success",
      data: req.body,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (task === null) {
        throw "No task found with that id";
      } else {
        res.status(200).json({
          status: "success",
          data: null,
        });
      }
    } else {
      throw "No a correct ID format";
    }
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

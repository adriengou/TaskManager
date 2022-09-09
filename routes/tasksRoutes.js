const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router
  .route("/")
  .get(tasksController.getAllTasks)
  .post(tasksController.postNewTask);

router
  .route("/:id")
  .get(tasksController.getOneTask)
  .patch(tasksController.updateTask)
  .delete(tasksController.deleteTask)

module.exports = router;

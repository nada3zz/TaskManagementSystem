const { Router } = require("express");
const { validator } = require("../../middlewares/validator");
const { controller } = require("../../middlewares/controller");
const taskController = require("./controllers");
const { taskValidation } = require("./schema");
const { isAuthenticated } = require("../../middlewares/isAuthenticated");

const router = Router();

const baseRoute = "/tasks";


router.get(
  "/",
  isAuthenticated,
  validator({}),
  controller(taskController.getAllTasks)
);

router.get(
  "/:id",
  isAuthenticated,
  validator(taskValidation.getDetailsSchema),
  controller(taskController.getTask)
);


router.post(
  "/",
  isAuthenticated,
  validator(taskValidation.add),
  controller(taskController.addTask)
);

router.put(
  "/:id",
  isAuthenticated,
  validator(taskValidation.edit),
  controller(taskController.updateTask)
);

router.delete(
  "/:id",
  isAuthenticated,
  validator(taskValidation.delete),
  controller(taskController.delete)
);

module.exports = { taskBaseRoute: baseRoute, taskRoutes: router };

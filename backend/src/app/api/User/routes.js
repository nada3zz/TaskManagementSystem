const { Router } = require("express");
const { validator } = require("../../middlewares/validator");
const { controller } = require("../../middlewares/controller");
const userController = require("./controllers");
const { userValidation } = require("./schema");

const router = Router();

const baseRoute = "/auth";


router.post(
  "/signup",
  validator(userValidation),
  controller(userController.signUp)
);


router.post(
  "/login",
  validator(userValidation),
  controller(userController.logIn)
);


module.exports = { userBaseRoute: baseRoute, userRoutes: router };

const { Router } = require("express");
const { taskBaseRoute, taskRoutes } = require("../api/Task/routes");
const { userBaseRoute, userRoutes } = require("../api/User/routes");

const baseRouter = Router();

baseRouter.use(taskBaseRoute, taskRoutes);
baseRouter.use(userBaseRoute, userRoutes);


module.exports = { apiBaseRouter: baseRouter };
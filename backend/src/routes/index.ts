import { Router } from "express";

import { ongRoutes } from "./ong.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/ong", ongRoutes);
routes.use("/user", userRoutes);

export { routes }
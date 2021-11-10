import { Router } from "express";

import { ongRoutes } from "./ong.routes";

const routes = Router();

routes.use("/ong", ongRoutes);

export { routes }
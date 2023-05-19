import { Router } from "express";
import authMiddleware from "../auth/auth.middleware.js";
import columnController from "./column.controller.js";
import { columnOrderValidator, columnValidator } from "./column.validator.js";

const columnRouter = Router();
columnRouter.get("/boards/:id/columns", authMiddleware, columnController.getColumns);
columnRouter.post('/boards/:id/columns', authMiddleware, columnValidator, columnController.createColumn);
columnRouter.put('/boards/:id/columns/:columnId', authMiddleware, columnValidator, columnController.updateColumn);
columnRouter.put('/boards/:id/columns/order/set', authMiddleware, columnOrderValidator, columnController.updateColumnOrder);
columnRouter.delete('/boards/:id/columns/:columnId', authMiddleware, columnController.deleteColumn);

export default columnRouter;
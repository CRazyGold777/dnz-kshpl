import { Router } from 'express'
import { subjectController } from '../controllers/subject.controller.js';

export const subjectRouter = new Router()

subjectRouter.post("/subject", subjectController.create);
subjectRouter.get("/subject", subjectController.get);
subjectRouter.get("/subject/:id", subjectController.getById);
subjectRouter.put("/subject", subjectController.update);
subjectRouter.delete("/subject/:id", subjectController.delete);


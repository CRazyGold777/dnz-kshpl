import { Router } from 'express'
import { lessonController } from '../controllers/lesson.controller.js';

export const lessonRouter = new Router()

lessonRouter.post("/lesson", lessonController.create);
lessonRouter.get("/lesson", lessonController.get);
lessonRouter.get("/lessonDay", lessonController.getDayLesson);
lessonRouter.get("/lesson/:id", lessonController.getById);
lessonRouter.put("/lesson", lessonController.update);
lessonRouter.delete("/lesson/:id", lessonController.delete);


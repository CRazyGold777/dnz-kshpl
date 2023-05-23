import { Router } from 'express'
import { courseController } from '../controllers/course.controller.js';

export const courseRouter = new Router()

courseRouter.post("/course", courseController.createCourse);
courseRouter.get("/course", courseController.getCourse);
courseRouter.get("/course/:id", courseController.getCourseById);
courseRouter.put("/course", courseController.updateCourse);
courseRouter.delete("/course/:id", courseController.deleteCourse);


import { Router } from 'express'
import { teacherController } from '../controllers/teacher.controller.js';

export const teacherRouter = new Router()

teacherRouter.post("/teacher", teacherController.createTeacher);
teacherRouter.get("/teacher", teacherController.getTeacher);
teacherRouter.get("/teacher/:id", teacherController.getTeacherById);
teacherRouter.put("/teacher", teacherController.updateTeacher);
teacherRouter.delete("/teacher/:id", teacherController.deleteTeacher);


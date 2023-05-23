import { Router } from 'express'
import { studentController } from '../controllers/student.controller.js';

export const studentRouter = new Router()

studentRouter.post("/student", studentController.createStudent);
studentRouter.get("/student", studentController.getStudent);
studentRouter.get("/student/:id", studentController.getStudentById);
studentRouter.put("/student", studentController.updateStudent);
studentRouter.delete("/student/:id", studentController.deleteStudent);


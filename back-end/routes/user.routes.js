import { Router } from 'express'
import { userController } from '../controllers/user.controller.js'

export const userRouter = new Router()

userRouter.get("/user/status", userController.getUserStatus);
userRouter.post("/user", userController.createUser);
userRouter.get("/user", userController.getUsers);
userRouter.get("/user/:id", userController.getUsersById);
userRouter.put("/user", userController.updateUser);
userRouter.delete("/user/:id", userController.deleteUser);


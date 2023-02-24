import { Router } from 'express'
import { notionController } from '../controllers/notion.controller.js';


export const notionRouter = new Router()

notionRouter.post("/notion", notionController.createNotion);
notionRouter.get("/notion", notionController.getNotions);
notionRouter.get("/notion/:id", notionController.getNotionById);
notionRouter.put("/notion", notionController.updateNotion);
notionRouter.delete("/notion/:id", notionController.deleteNotion);
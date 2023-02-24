import { Router } from 'express'
import { newsController } from '../controllers/news.controller.js';


export const newsRouter = new Router()

newsRouter.post("/news", newsController.createNews);
newsRouter.get("/news", newsController.getNews);
newsRouter.get("/news/sub-news", newsController.getSubNews);
newsRouter.get("/news/:id", newsController.getNewsById);
newsRouter.get("/news-page/:id", newsController.getNewsPageById);
newsRouter.put("/news", newsController.updateNews);
newsRouter.delete("/news/:id", newsController.deleteNews);
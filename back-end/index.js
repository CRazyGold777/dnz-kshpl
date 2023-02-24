import express from "express";
import { userRouter } from './routes/user.routes.js'
import cors from 'cors'
import { notionRouter } from "./routes/notion.routes.js";
import { newsRouter } from "./routes/news.routes.js";

const app = express()
const PORT = process.env.PORT || 3001

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())

app.use('/api', userRouter, notionRouter, newsRouter)

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}.`)
})
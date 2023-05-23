import express from "express";
import { userRouter } from './routes/user.routes.js'
import cors from 'cors'
import { notionRouter } from "./routes/notion.routes.js";
import { newsRouter } from "./routes/news.routes.js";
import { studentRouter } from "./routes/student.routes.js";
import { courseRouter } from "./routes/course.routes.js";
import { teacherRouter } from "./routes/teacher.routes.js";
import { subjectRouter } from "./routes/subject.routes.js";
import { lessonRouter } from "./routes/lesson.routes.js";

const app = express()
const PORT = process.env.PORT || 3001

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())

app.use('/api', userRouter, notionRouter, newsRouter, studentRouter, courseRouter, teacherRouter, subjectRouter, lessonRouter)

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}.`)
})
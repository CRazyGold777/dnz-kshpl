import { queryToDB } from '../db.js'

class LessonController {
	async create(req, res) {
		const { week_day, course_id, subject_id, time_id } = req.body
		const query = `INSERT INTO lesson (week_day,course_id, subject_id, time_id) VALUES (${week_day},${course_id},${subject_id},${time_id});`
		await queryToDB(query)
			.then(() => {
				res.json('lesson added')
			})
	}
	async get(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from lesson order by lesson_id limit ${limit}`
		}
		else {
			query = `select * from lesson`
		}
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async getDayLesson(req, res) {
		const { week_day, course_id } = req.query
		let query = `select time,name_subject,pib_teacher from lesson INNER JOIN subject ON lesson.subject_id=subject.subject_id
		INNER JOIN b_lessons ON b_lessons.b_lessons_id=lesson.time_id
		INNER JOIN teacher ON teacher.teacher_id=subject.id_teacher
		where week_day=${week_day} and course_id=${course_id}
		order by time asc`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async getById(req, res) {
		const { id } = req.params
		const query = `select * from lesson where lesson_id = ${id}`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async update(req, res) {
		const { id, week_day, course_id, subject_id, time_id } = req.body
		const query = `UPDATE lesson SET week_day='${week_day}', course_id='${course_id}', subject_id='${subject_id}', time_id='${time_id}' WHERE lesson_id = ${id} `;
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("lesson not found")
		}
		else {
			res.json("lesson update")
		}
	}
	async delete(req, res) {
		const { id } = req.params
		const query = `DELETE FROM lesson WHERE lesson_id = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("lesson delete");
			})
	}
}

export const lessonController = new LessonController()
import { queryToDB } from '../db.js'

class CourseController {
	async createCourse(req, res) {
		const { name_group, year_of_create } = req.body
		const query = `INSERT INTO course (name_group, year_of_create) VALUES ('${name_group}', ${year_of_create});`
		await queryToDB(query)
			.then(() => {
				res.json('Course added')
			})
	}
	async getCourse(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from course order by id_course limit ${limit}`
		}
		else {
			query = `select * from course`
		}
		const users = await queryToDB(query)
		res.json(users.rows);
	}
	async getCourseById(req, res) {
		const { id } = req.params
		const query = `select * from course where id_course = ${id}`
		const users = await queryToDB(query)
		res.json(users.rows);
	}
	async updateCourse(req, res) {
		const { id, name_group, year_of_create } = req.body
		const query = `UPDATE course SET name_group='${name_group}', year_of_create=${year_of_create} WHERE id_course = ${id} `;
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("Course not found")
		}
		else {
			res.json("Course update")
		}
	}
	async deleteCourse(req, res) {
		const { id } = req.params
		const query = `DELETE FROM course WHERE id_course = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("Course delete");
			})
	}
}

export const courseController = new CourseController()
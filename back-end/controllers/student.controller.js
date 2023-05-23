import { queryToDB } from '../db.js'

class StudentController {
	async createStudent(req, res) {
		const { pib, course } = req.body
		const query = `INSERT INTO student (pib, course_id) VALUES ('${pib}', ${course});`
		await queryToDB(query)
			.then(() => {
				res.json('Student added')
			})
	}
	async getStudent(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from student order by student_id limit ${limit}`
		}
		else {
			query = `select * from student`
		}
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async getStudentById(req, res) {
		const { id } = req.params
		const query = `select * from student where student_id = ${id}`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async updateStudent(req, res) {
		const { id, pib, course } = req.body
		const query = `UPDATE student SET pib='${pib}', course_id=${course} WHERE student_id = ${id} `;
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("Student not found")
		}
		else {
			res.json("Student update")
		}
	}
	async deleteStudent(req, res) {
		const { id } = req.params
		const query = `DELETE FROM student WHERE student_id = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("Student delete");
			})
	}
}

export const studentController = new StudentController()
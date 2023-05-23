import { queryToDB } from '../db.js'

class TeacherController {
	async createTeacher(req, res) {
		const { pib } = req.body
		const query = `INSERT INTO teacher (pib_teacher) VALUES ('${pib}');`
		await queryToDB(query)
			.then(() => {
				res.json('Teacher added')
			})
	}
	async getTeacher(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from teacher order by teacher_id limit ${limit}`
		}
		else {
			query = `select * from teacher`
		}
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async getTeacherById(req, res) {
		const { id } = req.params
		const query = `select * from teacher where teacher_id = ${id}`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async updateTeacher(req, res) {
		const { id, pib } = req.body
		const query = `UPDATE teacher SET pib_teacher='${pib}' WHERE teacher_id = ${id} `;
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("Teacher not found")
		}
		else {
			res.json("Teacher update")
		}
	}
	async deleteTeacher(req, res) {
		const { id } = req.params
		const query = `DELETE FROM teacher WHERE teacher_id = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("Teacher delete");
			})
	}
}

export const teacherController = new TeacherController()
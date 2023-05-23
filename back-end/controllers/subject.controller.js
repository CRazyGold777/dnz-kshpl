import { queryToDB } from '../db.js'

class SubjectController {
	async create(req, res) {
		const { name_subject, id_teacher } = req.body
		const query = `INSERT INTO subject (name_subject, id_teacher) VALUES ('${name_subject}',${id_teacher});`
		await queryToDB(query)
			.then(() => {
				res.json('subject added')
			})
	}
	async get(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from subject order by subject_id limit ${limit}`
		}
		else {
			query = `select * from subject`
		}
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async getById(req, res) {
		const { id } = req.params
		const query = `select * from subject where subject_id = ${id}`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async update(req, res) {
		const { id, name_subject, id_teacher } = req.body
		const query = `UPDATE subject SET name_subject='${name_subject}', id_teacher='${id_teacher}' WHERE subject_id = ${id} `;
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("subject not found")
		}
		else {
			res.json("subject update")
		}
	}
	async delete(req, res) {
		const { id } = req.params
		const query = `DELETE FROM subject WHERE subject_id = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("subject delete");
			})
	}
}

export const subjectController = new SubjectController()
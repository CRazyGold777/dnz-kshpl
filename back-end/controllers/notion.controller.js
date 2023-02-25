import { queryToDB } from '../db.js'

class NotionController {
	async createNotion(req, res) {
		const { title, text } = req.body
		const query = `INSERT INTO notion (date, title, text) VALUES (CURRENT_DATE, '${title}','${text}');`
		await queryToDB(query)
			.then(() => {
				res.json('Notion added')
			})
	}
	async getNotions(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from notion order by id desc limit ${limit}`
		}
		else {
			query = `select * from notion order by id desc`
		}
		const notion = await queryToDB(query)
		res.json(notion.rows);
	}
	async getNotionById(req, res) {
		const { id } = req.params
		const query = `select * from notion where id = '${id}'`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async updateNotion(req, res) {
		const { id, title, text } = req.body
		const query = `UPDATE notion SET title='${title}', text='${text}' WHERE id = '${id}' `;
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("Notion not found")
		}
		else {
			res.json("Notion update")
		}
	}
	async deleteNotion(req, res) {
		const { id } = req.params
		const query = `DELETE FROM notion WHERE id = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("Notion delete");
			})
	}
}

export const notionController = new NotionController()
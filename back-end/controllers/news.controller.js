import { queryToDB } from '../db.js'

class NewsController {
	async createNews(req, res) {
		const { title, img, subtext, text, dopimg } = req.body
		let query = null
		if (dopimg !== "null") {
			query = `INSERT INTO news (title, img, subtext,date,text,dopimg) VALUES ('${title}','${img}','${subtext}',NOW(),'${text}','${dopimg}');`;
		}
		else {
			query = `INSERT INTO news (title, img, subtext,date,text) VALUES ('${title}','${img}','${subtext}',NOW(),'${text}');`;
		}
		await queryToDB(query)
			.then(() => {
				res.json('News added')
			})
	}
	async getNews(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from news order by id desc limit ${limit}`
		}
		else {
			query = `select * from news order by id desc`
		}
		const notion = await queryToDB(query)
		res.json(notion.rows);
	}
	async getSubNews(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select id, title, img, subText from news order by id desc limit ${limit}`
		}
		else {
			query = `select id, title, img, subText from news order by id desc`
		}
		const notion = await queryToDB(query)
		res.json(notion.rows);
	}
	async getNewsPageById(req, res) {
		const { id } = req.params
		const query = `select date, title, img, text, dopImg from news where id = '${id}'`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async getNewsById(req, res) {
		const { id } = req.params
		const query = `select * from news where id = '${id}'`
		const result = await queryToDB(query)
		res.json(result.rows);
	}
	async updateNews(req, res) {
		const { id, title, img, subtext, text, dopimg } = req.body
		let query = null

		if (dopimg !== "null") {
			query = `UPDATE news SET title='${title}', img='${img}', subtext='${subtext}', text='${text}' dopimg='${dopimg}' WHERE id = '${id}' `;
		}
		else {
			query = `UPDATE news SET title='${title}', img='${img}', subtext='${subtext}', text='${text}' WHERE id = '${id}' `;
		}
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("News not found")
		}
		else {
			res.json("News update")
		}
	}
	async deleteNews(req, res) {
		const { id } = req.params
		const query = `DELETE FROM news WHERE id = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("News delete");
			})
	}
}

export const newsController = new NewsController()
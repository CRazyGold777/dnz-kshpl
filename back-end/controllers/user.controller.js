import { queryToDB } from '../db.js'

class UserController {
	async createUser(req, res) {
		const { login, password, status } = req.body
		const query = `INSERT INTO users (login, password, status) VALUES ('${login}', '${password}','${status}');`
		await queryToDB(query)
			.then(() => {
				res.json('Users added')
			})
		res.json('Somsing wrong')
	}
	async getUsers(req, res) {
		const { limit } = req.query
		let query = null
		if (limit) {
			query = `select * from users order by id limit ${limit}`
		}
		else {
			query = `select * from users`
		}
		const users = await queryToDB(query)
		res.json(users.rows);
	}
	async getUsersById(req, res) {
		const { id } = req.params
		const query = `select * from users where id = '${id}'`
		const users = await queryToDB(query)
		res.json(users.rows);
	}
	async getUserStatus(req, res) {
		const { login, password } = req.query
		const query = `select * from users where login = '${login}' and password = '${password}'`
		const users = await queryToDB(query)
		let resultCode = 0
		let message = null
		let responce = null
		if (users.rows.length === 0) {
			resultCode = 1
			message = "User not found"
		} else {
			responce = users.rows[0].status
		}
		res.json({ status: responce, resultCode, message });
	}
	async updateUser(req, res) {
		const { id, login, password, status } = req.body
		const query = `UPDATE users SET login='${login}', password='${password}', status='${status}' WHERE id = '${id}' `;
		const result = await queryToDB(query);
		if (result.rowCount === 0) {
			res.json("User not found")
		}
		else {
			res.json("User update")
		}
	}
	async deleteUser(req, res) {
		const { id } = req.params
		const query = `DELETE FROM users WHERE id = ${id} `;
		await queryToDB(query)
			.then(() => {
				res.json("User delete");
			})
	}
}

export const userController = new UserController()
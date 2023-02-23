import { queryToDB } from '../db.js'

class UserController {
	async createUser(req, res) {
		const { login, password, status } = req.body
		console.log(login, password, status);
		const query = `INSERT INTO users (login, password, status) VALUES ('${login}', '${password}','${status}');`
		await queryToDB(query)
			.then(() => {
				res.json('Users added')
			})
		res.json('Somsing wrong')
	}
	async getUsers(req, res) {
		const { limit } = req.query
		const query = `select * from users order by id limit ${limit}`
		const users = await queryToDB(query)
		res.json(users.rows);
	}
	async getUserStatus(req, res) {
		const { login, password } = req.query
		const query = `select * from users where login='${login}' and password='${password}'`
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
	async updateUser(req, res) { }
	async deleteUser(req, res) {
		const { id } = req.params
		const query = `DELETE FROM users WHERE id=${id}`;
		res.json(await queryToDB(query));
	}
}

export const userController = new UserController()
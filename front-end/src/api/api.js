import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3001/api/',
	withCredentials: true
})

export const authAPI = {
	getStatusUser(login, password) {
		return instance.get(`user/status?login=${login}&password=${password}`)
			.then(res => {
				return res.data
			})
	}
}

export const usersAPI = {
	getUsers(count) {
		return instance.get(`user?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	deleteUser(id) {
		return instance.delete(`user/${id}`)
			.then(res => {
				console.log(res);
			})
	}
}
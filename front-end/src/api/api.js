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
	createUser(login, password, status) {
		return instance.post('user', { login, password, status })
			.then(res => {
				debugger
				return res.data
			})
	},
	getUsers(count) {
		return instance.get(`user?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getUsersById(id) {
		return instance.get(`user/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateUser(id, login, password, status) {
		return instance.put('user', { id, login, password, status })
			.then(res => {
				debugger
				return res.data
			})
	},
	deleteUser(id) {
		return instance.delete(`user/${id}`)
			.then(res => {
				return res.data
			})
	},
}

export const newsAPI = {
	createNews(title, img, subtext, text, dopimg) {
		return instance.post('news', { title, img, subtext, text, dopimg })
			.then(res => {
				return res.data
			})
	},
	getNews(count) {
		return instance.get(`news?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getSubNews(count) {
		return instance.get(`news/sub-news?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getNewsPageById(id) {
		return instance.get(`news-page/${id}`)
			.then(res => {
				return res.data
			})
	},
	getNewsById(id) {
		return instance.get(`news/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateNews(id, title, img, subtext, text, dopimg) {
		return instance.put('news', { id, title, img, subtext, text, dopimg })
			.then(res => {
				return res.data
			})
	},
	deleteNews(id) {
		return instance.delete(`news/${id}`)
			.then(res => {
				return res.data
			})
	},
}

export const notionAPI = {
	createNotion(title, text) {
		return instance.post('notion', { title, text })
			.then(res => {
				return res.data
			})
	},
	getNotion(count) {
		return instance.get(`notion?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getNotionById(id) {
		return instance.get(`notion/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateNotion(id, title, text) {
		return instance.put('notion', { id, title, text })
			.then(res => {
				return res.data
			})
	},
	deleteNotion(id) {
		return instance.delete(`notion/${id}`)
			.then(res => {
				return res.data
			})
	},
}

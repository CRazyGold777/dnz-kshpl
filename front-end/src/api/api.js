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
		return instance.get(`notion/${id}`).then(res => {
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

export const courseAPI = {
	createCourse(name_group, year_of_create) {
		return instance.post('course', { name_group, year_of_create })
			.then(res => {
				return res.data
			})
	},
	getCourse(count) {
		return instance.get(`course?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getCourseById(id) {
		return instance.get(`course/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateCourse(id, name_group, year_of_create) {
		return instance.put('course', { id, name_group, year_of_create })
			.then(res => {
				return res.data
			})
	},
	deleteCourse(id) {
		return instance.delete(`course/${id}`)
			.then(res => {
				return res.data
			})
	},
}

export const lessonAPI = {
	createLesson(week_day, course_id, subject_id, time_id) {
		return instance.post('lesson', { week_day, course_id, subject_id, time_id })
			.then(res => {
				return res.data
			})
	},
	getLesson(count) {
		return instance.get(`lesson?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getDayLesson(week_day, course_id) {
		return instance.get(`lessonDay?week_day=${week_day}&course_id=${course_id}`)
			.then(res => {
				return res.data
			})
	},
	getLessonById(id) {
		return instance.get(`lesson/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateLesson(id, week_day, course_id, subject_id, time_id) {
		return instance.put('lesson', { id, week_day, course_id, subject_id, time_id })
			.then(res => {
				return res.data
			})
	},
	deleteLesson(id) {
		return instance.delete(`lesson/${id}`)
			.then(res => {
				return res.data
			})
	},
}

export const studentAPI = {
	createStudent(pib, course) {
		return instance.post('student', { pib, course })
			.then(res => {
				return res.data
			})
	},
	getStudent(count) {
		return instance.get(`student?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getStudentById(id) {
		return instance.get(`student/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateStudent(id, pib, course) {
		return instance.put('student', { id, pib, course })
			.then(res => {
				return res.data
			})
	},
	deleteStudent(id) {
		return instance.delete(`student/${id}`)
			.then(res => {
				return res.data
			})
	},
}

export const subjectAPI = {
	createSubject(name_subject, id_teacher) {
		return instance.post('subject', { name_subject, id_teacher })
			.then(res => {
				return res.data
			})
	},
	getSubject(count) {
		return instance.get(`subject?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getSubjectById(id) {
		return instance.get(`subject/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateSubject(id, name_subject, id_teacher) {
		return instance.put('subject', { id, name_subject, id_teacher })
			.then(res => {
				return res.data
			})
	},
	deleteSubject(id) {
		return instance.delete(`subject/${id}`)
			.then(res => {
				return res.data
			})
	},
}

export const teacherAPI = {
	createTeacher(pib) {
		return instance.post('teacher', { pib })
			.then(res => {
				return res.data
			})
	},
	getTeacher(count) {
		return instance.get(`teacher?limit=${count}`)
			.then(res => {
				return res.data
			})
	},
	getTeacherById(id) {
		return instance.get(`teacher/${id}`)
			.then(res => {
				return res.data
			})
	},
	updateTeacher(id, pib) {
		return instance.put('teacher', { id, pib })
			.then(res => {
				return res.data
			})
	},
	deleteTeacher(id) {
		return instance.delete(`teacher/${id}`)
			.then(res => {
				return res.data
			})
	},
}
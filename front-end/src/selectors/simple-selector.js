export const getNews = state => {
	return state.news.newsArray;
}
export const getCountNews = state => {
	return state.news.countNews;
}
export const getNewsPage = state => {
	return state.newsPage.news;
}
export const getCountNotion = state => {
	return state.notion.countNotion;
}
export const getMessage = state => {
	return state.auth.message
}
export const isAuth = state => {
	return state.auth.isAuth
}
export const getStatus = state => {
	return state.auth.statusUser
}
export const getAUsersSelect = state => {
	return state.adminUsers.users
}
export const getAUserscount = state => {
	return state.adminUsers.count
}
export const getAUser = state => {
	return state.adminUsers.user
}
export const getSSubNew = state => {
	return state.adminUsers.subNews
}
export const getNew = state => {
	return state.adminUsers.new
}
export const getNotions = state => {
	return state.adminUsers.notions
}
export const getNotion = state => {
	return state.adminUsers.notion
}
export const getNotionFromNR = state => {
	return state.notion.nArray
}
export const getTeachersSelect = state => {
	return state.adminUsers.teachers
}
export const getTeacherSelect = state => {
	return state.adminUsers.teacher
}
export const getStudentsSelect = state => {
	return state.adminUsers.students
}
export const getStudentSelect = state => {
	return state.adminUsers.student
}
export const getSubjectsSelect = state => {
	return state.adminUsers.subjects
}
export const getSubjectSelect = state => {
	return state.adminUsers.subject
}
export const getCoursesSelect = state => {
	return state.adminUsers.courses
}
export const getCourseSelect = state => {
	return state.adminUsers.course
}
export const getLessonsSelect = state => {
	return state.adminUsers.lessons
}
export const getDayLessonsSelect = state => {
	return state.adminUsers.dayLesson
}
export const getLessonSelect = state => {
	return state.adminUsers.lesson
}
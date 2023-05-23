// import { authAPI } from '../api/api.js'

import { newsAPI, notionAPI, usersAPI, courseAPI, lessonAPI, studentAPI, subjectAPI, teacherAPI } from "../api/api"

const SET_MESSAGE = "SET_MESSAGE"

const SET_USERS = "SET_USERS"
const SET_USER = "SET_USER"

const SET_NEWS = "SET_NEWS"
const SET_NEW = "SET_NEW"
const SET_NEW_PAGE = "SET_NEW_PAGE"
const SET_SUB_NEW = "SET_SUB_NEW"

const SET_NOTIONS = "SET_NOTIONS"
const SET_NOTION = "SET_NOTION"

const SET_COURSES = "SET_COURSES"
const SET_COURSE = "SET_COURSE"

const SET_LESSONS = "SET_LESSONS"
const SET_DAY_LESSONS = "SET_DAY_LESSONS"
const SET_LESSON = "SET_LESSON"

const SET_STUDENTS = "SET_STUDENTS"
const SET_STUDENT = "SET_STUDENT"

const SET_SUBJECTS = "SET_SUBJECTS"
const SET_SUBJECT = "SET_SUBJECT"

const SET_TEACHERS = "SET_TEACHERS"
const SET_TEACHER = "SET_TEACHER"

const initiatState = {
	users: [],
	user: {},
	news: [],
	new: {},
	newPage: {},
	subNews: [],
	notions: [],
	notion: {},
	courses: [],
	course: {},
	lessons: [],
	dayLesson: [],
	lesson: {},
	students: [],
	student: {},
	subjects: [],
	subject: {},
	teachers: [],
	teacher: {},
}

export const adminUsersReducer = (state = initiatState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_USER:
			return {
				...state,
				user: action.user
			}
		case SET_NEWS:
			return {
				...state,
				news: action.news
			}
		case SET_NEW:
			return {
				...state,
				new: action.ne
			}
		case SET_NEW_PAGE:
			return {
				...state,
				newPage: action.newPage
			}
		case SET_SUB_NEW:
			return {
				...state,
				subNews: action.subNews
			}
		case SET_NOTIONS:
			return {
				...state,
				notions: action.notions
			}
		case SET_NOTION:
			return {
				...state,
				notion: action.notion
			}
		case SET_COURSES:
			return {
				...state,
				courses: action.courses
			}
		case SET_COURSE:
			return {
				...state,
				course: action.course
			}
		case SET_LESSONS:
			return {
				...state,
				lessons: action.lessons
			}
		case SET_DAY_LESSONS:
			return {
				...state,
				dayLesson: action.dayLessons
			}
		case SET_LESSON:
			return {
				...state,
				lesson: action.lesson
			}
		case SET_MESSAGE:
			return {
				...state,
				message: action.message
			}
		case SET_STUDENTS:
			return {
				...state,
				students: action.students
			}
		case SET_STUDENT:
			return {
				...state,
				student: action.student
			}
		case SET_SUBJECTS:
			return {
				...state,
				subjects: action.subjects
			}
		case SET_SUBJECT:
			return {
				...state,
				subject: action.subject
			}
		case SET_TEACHERS:
			return {
				...state,
				teachers: action.teachers
			}
		case SET_TEACHER:
			return {
				...state,
				teacher: action.teacher
			}
		default:
			return state;
	}
}

const setMessage = message => ({ type: SET_MESSAGE, message })

const setUsers = (users) => ({ type: SET_USERS, users })
const setUser = (user) => ({ type: SET_USER, user })

const setNews = (news) => ({ type: SET_NEWS, news })
const setNew = (ne) => ({ type: SET_NEW, ne })
const setNewPage = (newPage) => ({ type: SET_NEW_PAGE, newPage })
const setSubNew = (subNews) => ({ type: SET_SUB_NEW, subNews })

const setNotions = (notions) => ({ type: SET_NOTIONS, notions })
const setNotion = (notion) => ({ type: SET_NOTION, notion })

const setCourses = (courses) => ({ type: SET_COURSES, courses })
const setCourse = (course) => ({ type: SET_COURSE, course });

const setLessons = (lessons) => ({ type: SET_LESSONS, lessons })
const dayDayLesson = (dayLessons) => ({ type: SET_DAY_LESSONS, dayLessons })
const setLesson = (lesson) => ({ type: SET_LESSON, lesson });

const setStudents = (students) => ({ type: SET_STUDENTS, students })
const setStudent = (student) => ({ type: SET_STUDENT, student });

const setSubjects = (subjects) => ({ type: SET_SUBJECTS, subjects })
const setSubject = (subject) => ({ type: SET_SUBJECT, subject });

const setTeachers = (teachers) => ({ type: SET_TEACHERS, teachers })
const setTeacher = (teacher) => ({ type: SET_TEACHER, teacher });


//users
export const getAUsers = (count) => dispatch => {
	usersAPI.getUsers(count)
		.then(res => {
			dispatch(setUsers(res))
		})
}
export const getAUserById = (id) => dispatch => {
	dispatch(setUser({}))
	usersAPI.getUsersById(id)
		.then(res => {
			dispatch(setUser(res[0]))
		})
}
export const createAUser = (login, password, status) => dispatch => {
	usersAPI.createUser(login, password, status)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const updateAUser = (id, login, password, status) => dispatch => {
	usersAPI.updateUser(id, login, password, status)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteAUser = (id, count) => dispatch => {
	usersAPI.deleteUser(id)
		.then(res => {
			dispatch(getAUsers(count));
			dispatch(setMessage(res));
		})
}

//news
export const createNews = (title, img, subtext, text, dopimg) => dispatch => {
	newsAPI.createNews(title, img, subtext, text, dopimg)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const getNews = (count) => dispatch => {
	newsAPI.getNews(count)
		.then(res => {
			dispatch(setNews(res))
		})
}
export const getSubNews = (count) => dispatch => {
	newsAPI.getSubNews(count)
		.then(res => {
			dispatch(setSubNew(res))
		})
}
export const getNewsPageById = (id) => dispatch => {
	newsAPI.getNewsPageById(id)
		.then(res => {
			dispatch(setNewPage(res[0]))
		})
}
export const getNewsById = (id) => dispatch => {
	newsAPI.getNewsById(id)
		.then(res => {
			dispatch(setNew(res[0]))
		})
}
export const updateNews = (id, title, img, subtext, text, dopimg) => dispatch => {
	newsAPI.updateNews(id, title, img, subtext, text, dopimg)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteNews = (id, count) => dispatch => {
	newsAPI.deleteNews(id)
		.then(res => {
			dispatch(setMessage(res));
			dispatch(getSubNews(count));
		})
}

//notions
export const createNotion = (title, text) => dispatch => {
	notionAPI.createNotion(title, text)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const getNotion = (count) => dispatch => {
	notionAPI.getNotion(count)
		.then(res => {
			dispatch(setNotions(res));
		})
}
export const getNotionById = (id) => dispatch => {
	notionAPI.getNotionById(id)
		.then(res => {
			dispatch(setNotion(res[0]))
		})
}
export const updateNotion = (id, title, text) => dispatch => {
	notionAPI.updateNotion(id, title, text)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteNotion = (id, count) => dispatch => {
	notionAPI.deleteNotion(id)
		.then(res => {
			dispatch(setMessage(res));
			dispatch(getNotion(count));
		})
}

//course
export const createCourse = (name_group, year_of_create) => dispatch => {
	courseAPI.createCourse(name_group, year_of_create)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const getCourse = (count) => dispatch => {
	courseAPI.getCourse(count)
		.then(res => {
			dispatch(setCourses(res));
		})
}
export const getCourseById = (id) => dispatch => {
	courseAPI.getCourseById(id)
		.then(res => {
			dispatch(setCourse(res[0]))
		})
}
export const updateCourse = (id, name_group, year_of_create) => dispatch => {
	courseAPI.updateCourse(id, name_group, year_of_create)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteCourse = (id, count) => dispatch => {
	courseAPI.deleteCourse(id)
		.then(res => {
			dispatch(setMessage(res));
			dispatch(getCourse(count));
		})
}

//lesson
export const createLesson = (week_day, course_id, subject_id, time_id) => dispatch => {
	lessonAPI.createLesson(week_day, course_id, subject_id, time_id)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const getLesson = (count) => dispatch => {
	lessonAPI.getLesson(count)
		.then(res => {
			dispatch(setLessons(res));
		})
}
export const getDayLesson = (week_day, course_id) => dispatch => {
	lessonAPI.getDayLesson(week_day, course_id)
		.then(res => {
			dispatch(dayDayLesson(res));
		})
}
export const getLessonById = (id) => dispatch => {
	lessonAPI.getLessonById(id)
		.then(res => {
			dispatch(setLesson(res[0]))
		})
}
export const updateLesson = (id, week_day, course_id, subject_id, time_id) => dispatch => {
	lessonAPI.updateLesson(id, week_day, course_id, subject_id, time_id)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteLesson = (id, count) => dispatch => {
	lessonAPI.deleteLesson(id)
		.then(res => {
			dispatch(setMessage(res));
			dispatch(getLesson(count));
		})
}

//student
export const createStudent = (pib, course) => dispatch => {
	studentAPI.createStudent(pib, course)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const getStudent = (count) => dispatch => {
	studentAPI.getStudent(count)
		.then(res => {
			dispatch(setStudents(res));
		})
}
export const getStudentById = (id) => dispatch => {
	studentAPI.getStudentById(id)
		.then(res => {
			dispatch(setStudent(res[0]))
		})
}
export const updateStudent = (id, pib, course) => dispatch => {
	studentAPI.updateStudent(id, pib, course)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteStudent = (id, count) => dispatch => {
	studentAPI.deleteStudent(id)
		.then(res => {
			dispatch(setMessage(res));
			dispatch(getStudent(count));
		})
}

//subject
export const createSubject = (name_group, year_of_create) => dispatch => {
	subjectAPI.createSubject(name_group, year_of_create)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const getSubject = (count) => dispatch => {
	subjectAPI.getSubject(count)
		.then(res => {
			dispatch(setSubjects(res));
		})
}
export const getSubjectById = (id) => dispatch => {
	subjectAPI.getSubjectById(id)
		.then(res => {
			dispatch(setSubject(res[0]))
		})
}
export const updateSubject = (id, name_group, year_of_create) => dispatch => {
	subjectAPI.updateSubject(id, name_group, year_of_create)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteSubject = (id, count) => dispatch => {
	subjectAPI.deleteSubject(id)
		.then(res => {
			dispatch(setMessage(res));
			dispatch(getSubject(count));
		})
}

//teacher
export const createTeacher = (pib) => dispatch => {
	teacherAPI.createTeacher(pib)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const getTeacher = (count) => dispatch => {
	teacherAPI.getTeacher(count)
		.then(res => {
			dispatch(setTeachers(res));
		})
}
export const getTeacherById = (id) => dispatch => {
	teacherAPI.getTeacherById(id)
		.then(res => {
			dispatch(setTeacher(res[0]))
		})
}
export const updateTeacher = (id, pib) => dispatch => {
	teacherAPI.updateTeacher(id, pib)
		.then(res => {
			dispatch(setMessage(res));
		})
}
export const deleteTeacher = (id, count) => dispatch => {
	teacherAPI.deleteTeacher(id)
		.then(res => {
			dispatch(setMessage(res));
			dispatch(getTeacher(count));
		})
}
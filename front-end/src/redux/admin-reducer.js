// import { authAPI } from '../api/api.js'

import { newsAPI, notionAPI, usersAPI } from "../api/api"

const SET_MESSAGE = "SET_MESSAGE"

const SET_USERS = "SET_USERS"
const SET_USER = "SET_USER"

const SET_NEWS = "SET_NEWS"
const SET_NEW = "SET_NEW"
const SET_NEW_PAGE = "SET_NEW_PAGE"
const SET_SUB_NEW = "SET_SUB_NEW"

const SET_NOTIONS = "SET_NOTIONS"
const SET_NOTION = "SET_NOTION"

const initiatState = {
	users: [],
	user: {},
	news: [],
	new: {},
	newPage: {},
	subNews: [],
	notions: [],
	notion: {}
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
		case SET_MESSAGE:
			return {
				...state,
				message: action.message
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
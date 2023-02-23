// import { authAPI } from '../api/api.js'

import { usersAPI } from "../api/api"

const SET_USERS = "SET_USERS"
const SET_USER = "SET_USER"
const INC_COUNT = "INC_COUNT"

const initiatState = {
	users: [],
	user: {},
	message: null,
	count: 1
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
		case INC_COUNT:
			return {
				...state,
				count: state.count + 1,
			}
		default:
			return state;
	}
}

const setUsers = (users) => ({ type: SET_USERS, users })
const setUser = (user) => ({ type: SET_USERS, user })
const incCount = () => ({ type: INC_COUNT })

export const getAUsers = (count) => dispatch => {
	usersAPI.getUsers(count)
		.then(res => {
			dispatch(setUsers(res))
		})
}

export const getAUser = (id) => dispatch => {

}

export const postAUser = (login, password, status) => dispatch => {

}

export const updateAUser = (id) => dispatch => {

}

export const deleteAUser = (id) => dispatch => {
	usersAPI.deleteUser(id);
	dispatch(incCount())
}
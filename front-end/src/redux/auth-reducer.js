import { authAPI } from '../api/api.js'

const SET_STATUS = "SET_STATUS"

const initiatState = {
	isAuth: false,
	statusUser: null,
	message: null,
}

export const authReducer = (state = initiatState, action) => {
	switch (action.type) {
		case SET_STATUS:
			return {
				...state,
				isAuth: action.auth,
				statusUser: action.status,
				message: action.message
			}
		default:
			return state;
	}
}

const setStatus = (status, auth, message) => ({ type: SET_STATUS, status, auth, message })

export const setUser = (user) => dispatch => {
	authAPI.getStatusUser(user.email, user.password).then(res => {
		if (res.resultCode === 0) {
			dispatch(setStatus(res.status, true, res.message))
		} else {
			dispatch(setStatus(res.status, false, res.message))
		}
	})
}

export const logOut = () => dispatch => {
	dispatch(setStatus(null, false, null))
}
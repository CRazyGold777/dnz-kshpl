
const initiatState = {
	auth: false,
	statusUser: null,
}

export const authReducer = (state = initiatState, action) => {
	switch (action.type) {

		default:
			return state;
	}
}

// const setNewsArray = (newsArray, count) => ({ type: SET_NEWS, newsArray, count })

export const setUser = (user) => dispatch => {
	console.log(user);
}
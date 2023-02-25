import { newsAPI } from "../api/api"

const SET_NEWS_R = "SET_NEWS_R";

const initiatState = {
	newsArray: []
}

export const newsReducer = (state = initiatState, action) => {
	switch (action.type) {
		case SET_NEWS_R:
			return {
				...state,
				newsArray: [...action.newsArray],
			};
		default:
			return state;
	}
}

const setNewsArray = (newsArray, count) => ({ type: SET_NEWS_R, newsArray })

export const setNewsTC = (count) => dispatch => {
	newsAPI.getSubNews(count)
		.then(res => {
			dispatch(setNewsArray(res))
		})
}
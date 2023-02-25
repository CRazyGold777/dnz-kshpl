import { newsAPI } from '../api/api.js'
const SET_NEWS_PAGE_REDUCER = "SET_NEWS_PAGE_REDUCER";

const initiatState = {
	news: {},
}

export const newsPageReducer = (state = initiatState, action) => {
	switch (action.type) {
		case SET_NEWS_PAGE_REDUCER:
			return {
				...state,
				news: action.news
			}
		default:
			return state;
	}
}

const setNews = (news) => ({ type: SET_NEWS_PAGE_REDUCER, news })

export const setNewsPageTC = (id) => dispatch => {
	newsAPI.getNewsPageById(id)
		.then(res => {
			dispatch(setNews(res[0]))
		})
}
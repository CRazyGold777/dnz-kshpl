import { notionAPI } from "../api/api"

const SET_NOTION_R = "SET_NOTION_R";


const initiatState = {
	nArray: []
}

export const notionReducer = (state = initiatState, action) => {
	switch (action.type) {
		case SET_NOTION_R:
			return {
				...state,
				nArray: [...action.nArray]
			};
		default:
			return state;
	}
}

const setNotionArray = (nArray) => ({ type: SET_NOTION_R, nArray })

export const setNotionTC = (count) => dispatch => {
	notionAPI.getNotion(count)
		.then(res => {
			dispatch(setNotionArray(res));
		})
}
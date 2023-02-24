import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { adminUsersReducer } from "./admin-reducer";
import { authReducer } from "./auth-reducer";
import { newsPageReducer } from "./newsPageReducer";
import { newsReducer } from "./newsReducer";
import { notionReducer } from "./notionReducer";

let reducers = combineReducers({
	news: newsReducer,
	newsPage: newsPageReducer,
	notion: notionReducer,
	auth: authReducer,
	adminUsers: adminUsersReducer
})

export let store = createStore(reducers, applyMiddleware(thunk))
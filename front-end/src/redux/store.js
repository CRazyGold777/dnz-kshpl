import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { newsPageReducer } from "./newsPageReducer";
import { newsReducer } from "./newsReducer";
import { notionReducer } from "./notionReducer";

let reducers = combineReducers({
	news: newsReducer,
	newsPage: newsPageReducer,
	notion: notionReducer,
})

export let store = createStore(reducers, applyMiddleware(thunk))
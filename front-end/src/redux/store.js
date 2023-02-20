import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { newsPageReducer } from "./newsPageReducer";
import { newsReducer } from "./newsReducer";

let reducers = combineReducers({
	news: newsReducer,
	newsPage: newsPageReducer,
})

export let store = createStore(reducers, applyMiddleware(thunk))
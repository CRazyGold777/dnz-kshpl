import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({

})

export let store = createStore(reducers, applyMiddleware(thunk))
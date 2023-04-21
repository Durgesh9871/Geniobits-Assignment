import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { realStateReducer } from "./Reducer";
import thunk from "redux-thunk"


const store = legacy_createStore(realStateReducer , applyMiddleware(thunk))

export {store}
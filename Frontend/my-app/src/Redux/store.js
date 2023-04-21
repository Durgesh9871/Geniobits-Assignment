import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { realStateReducer } from "./GetData/Reducer";
import thunk from "redux-thunk"
import {ReducerAuth} from "./Authentication/Reducer"

const rootReducer = combineReducers({
    realStateReducer,
    ReducerAuth
  });
const store = legacy_createStore(rootReducer , applyMiddleware(thunk))

export {store}
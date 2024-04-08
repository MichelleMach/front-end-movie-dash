import {combineReducers} from "redux";
import dataReducer from "./user/reducer";

const rootReducer = combineReducers({dataReducer});

export default rootReducer;
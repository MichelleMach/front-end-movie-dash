import { combineReducers } from "redux";
import dataReducer from "./movie/reducer";

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;
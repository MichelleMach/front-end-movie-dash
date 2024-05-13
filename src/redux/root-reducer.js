import { combineReducers } from "redux";
import dataReducer from "./movie/reducer";

const rootReducer = combineReducers({
    dataReducer: dataReducer
});

export default rootReducer;
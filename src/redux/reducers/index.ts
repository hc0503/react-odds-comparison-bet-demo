import { combineReducers } from "@reduxjs/toolkit";
import oddReducer from "./oddReducer";
import sportReducer from "./sportReducer";

const rootReducer = combineReducers({
	odd: oddReducer,
	sport: sportReducer,
});

export default rootReducer;

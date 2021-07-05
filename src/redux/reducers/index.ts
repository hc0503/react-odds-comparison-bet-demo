import { combineReducers } from "@reduxjs/toolkit";
import oddReducer from "./oddReducer";
import sportReducer from "./sportReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	odd: oddReducer,
	sport: sportReducer,
});

export default rootReducer;

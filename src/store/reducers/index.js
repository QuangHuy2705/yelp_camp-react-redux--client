import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import campgrounds from "./campgrounds";
import comments from "./comments";
import detailedCampground from "./detailedCampground";

const rootReducer = combineReducers({
	currentUser,
	errors,
	campgrounds,
	comments,
	detailedCampground
});

export default rootReducer;
import {LOAD_CAMPGROUNDS, REMOVE_CAMPGROUND} from "../actionTypes";

export default (state = [], action) => {
	switch(action.type) {
		case LOAD_CAMPGROUNDS:
			return [...action.campgrounds];
		case REMOVE_CAMPGROUND: 
			return state.filter(campground => campground._id !== action.id)
		case "REMOVE_CAMPGROUNDS":
			return state.filter(campground => campground._id === action.id);
		default:
			return state;
	}
}
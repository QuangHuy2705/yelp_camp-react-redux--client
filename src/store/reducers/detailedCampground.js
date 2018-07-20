import {ADD_DETAILED_CAMPGROUND} from "../actionTypes";

export default (state = {}, action) => {
	switch(action.type) {
		case ADD_DETAILED_CAMPGROUND: 
			return action.detailedCampground;
		default: 
			return state;
	}
};

import {LOAD_COMMENTS, REMOVE_COMMENT, ADD_COMMENT} from "../actionTypes";

export default (state=[], action) => {
	switch(action.type) {
		case LOAD_COMMENTS: 
			return [...action.comments];
		case ADD_COMMENT:
		 	return [...state, action.comment]
		case REMOVE_COMMENT:
			return state.filter(comment => comment._id !== action.comment_id);
		default:
			return state;
	}
}
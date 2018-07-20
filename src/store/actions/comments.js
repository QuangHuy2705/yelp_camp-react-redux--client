import {LOAD_COMMENTS, REMOVE_COMMENT, ADD_COMMENT} from "../actionTypes";
import {apiCall} from "../../services/api";
import {addError} from "./errors";

const loadComments = (comments) => ({
		type: LOAD_COMMENTS,
		comments
});

export const remove = (comment_id) => ({
		type: REMOVE_COMMENT,
		comment_id
});

const add = comment => ({
	type: ADD_COMMENT,
	comment
})

export const fetchComments = campground_id => {
	return (dispatch, getState) => {
		const {currentUser} = getState();
		return apiCall("get", `/api/users/${currentUser.user.id}/campgrounds/${campground_id}/comments`)
				.then(res => {
					dispatch(loadComments(res));
				}).catch(e => {
					dispatch(addError(e.message));
				}) 
	}
}

export const removeComment = (currentUser, campground_id, comment_id) => {
	return dispatch => {
			return apiCall("delete", `/api/users/${currentUser.user.id}/campgrounds/${campground_id}/comments/${comment_id}`, currentUser)
			.then(res => {
				dispatch(remove(comment_id));
			}).catch(e => {
				dispatch(addError(e.message));
			}) 
		}

		
}

export const addComment = (text, campground_id, currentUser) => {
	return dispatch => {
		return apiCall("post", `/api/users/${currentUser.user.id}/campgrounds/${campground_id}/comments`, {text, campground_id, currentUser})
			.then(res => {
				dispatch(add(res));
			})
			.catch(e => {
				dispatch(addError(e.message));
			})
	}
}

import {apiCall} from "../../services/api.js";
import {ADD_DETAILED_CAMPGROUND, LOAD_CAMPGROUNDS, LOAD_CAMPGROUND, REMOVE_CAMPGROUND} from "../actionTypes";
import {addError, removeError} from "./errors";


export const loadCampgrounds = campgrounds => ({
		type: LOAD_CAMPGROUNDS,
		campgrounds
});

const loadCampground = campground => ({
		type: LOAD_CAMPGROUND,
		campground
});

const remove = id => ({
		type: REMOVE_CAMPGROUND,
		id 
});

const detail = detailedCampground => ({
	type: ADD_DETAILED_CAMPGROUND,
	detailedCampground
});

export function postCampground({name, imageUrl, description}) {
	return (dispatch, getState) => {
		const {currentUser} = getState();
		const userId = currentUser.user.id;
		return apiCall("post", `/api/users/${userId}/campgrounds`, {name, imageUrl, description, userId})
			.then(res => {})
			.catch(e => dispatch(addError(e.message)));

	}
}

export const fetchCampgrounds = () => {
	return dispatch => {
		return apiCall("get", "/api/campgrounds")
				.then(res => {
					dispatch(loadCampgrounds(res));
				}).catch(err => {
					dispatch(addError(err.message));
				}) 

	}
};

export const findCampground = (campground_id) => {
	return (dispatch, getState) => {
		const {currentUser} = getState();
		return apiCall("get", `/api/users/${currentUser.user.id}/campgrounds/${campground_id}`)
				.then(res => {
					dispatch(detail(res)); 
				}).catch(e => {
					dispatch(addError(e.message));
				}) 
	}
};

export const removeCampground = campground_id => {
	return (dispatch, getState) => {
		const {currentUser} = getState();
		return apiCall("delete", `/api/users/${currentUser.user.id}/campgrounds/${campground_id}`)
				.then(() => dispatch(remove(campground_id)))
	}
}
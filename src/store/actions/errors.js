import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

export const addError = err => ({
	type: ADD_ERROR,
	err
});

export const removeError = () => ({
	type: REMOVE_ERROR
});

export function addERROR(err) {
	return dispatch => { 
		return dispatch(addError(err));
	}
}
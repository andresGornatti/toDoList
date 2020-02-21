import {
	CAMBIAR_BUSCAR_ROBOT,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from "./constants";

const initialStateSearch = {
	searchField: ''
}

export const buscarRobots = (state=initialStateSearch, action={}) => {
	//console.log(action.type);
	switch(action.type){
		case CAMBIAR_BUSCAR_ROBOT: 
		return Object.assign({}, state, {searchField:action.payload});
		// Object Spread Operator
		// return { ...state, searchField:action.payload};
		default: return state;
	}
}

const initialStateRequest = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRequest, action={}) => {
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
		return Object.assign({}, state, {isPending: true});
		case REQUEST_ROBOTS_SUCCESS:
		return Object.assign({}, state, {isPending: false, robots: action.payload});
		case REQUEST_ROBOTS_FAILED: 
		return Object.assign({}, state, {isPending: false, error: action.payload});
		default: 
		return state;
	}
}
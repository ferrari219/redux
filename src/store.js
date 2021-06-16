import { createStore } from 'redux';

const ADD = 'Add';
const DELETE = 'Delete';

const actionAdd = (text) => {
	return {
		type: ADD,
		text,
	};
};
const actionDelete = (id) => {
	return {
		type: DELETE,
		id: parseInt(id),
	};
};

const reducer = (state = [], action) => {
	// console.log(state, action);
	switch (action.type) {
		case ADD:
			return [
				{
					text: action.text,
					id: Date.now(),
				},
				...state,
			];
		case DELETE:
			return state.filter((todo) => todo.id !== action.id);
		default:
			return state;
	}
};
const store = createStore(reducer);
// console.log(store);

export const actionCreators = {
	actionAdd,
	actionDelete,
};

export default store;

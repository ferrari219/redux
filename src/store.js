import { createStore } from 'redux';

//action
const ADD = 'Add';
const DELETE = 'Delete';

const addToDo = (text) => {
	return {
		type: ADD,
		text: text,
	};
};
const deleteToDo = (id) => {
	return {
		type: DELETE,
		id: id,
	};
};

//reducer
const reducer = (state = [], action) => {
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

//store
const store = createStore(reducer);

export const actionCreators = {
	addToDo,
	deleteToDo,
};

export default store;

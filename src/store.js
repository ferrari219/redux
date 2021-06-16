import { createStore } from 'redux';

//reducer
const Add = 'Add';
const Delete = 'Delete';

const actionAdd = (text) => {
	return {
		type: Add,
		text,
	};
};
const actionDelete = (id) => {
	return {
		type: Delete,
		id,
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case Add:
			return [
				{
					text: action.text,
					id: Date.now(),
				},
				...state,
			];
		case Delete:
			return state.filter((todo) => todo.id !== action.id);
		default:
			return state;
	}
};

//store
const store = createStore(reducer);

export const actionCreator = {
	actionAdd,
	actionDelete,
};

export default store;

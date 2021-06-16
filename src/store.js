import { createStore } from 'redux';

const Add = 'Add';
const Delete = 'Delete';

//Action
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

//Reducer
const reducer = (state = [], action) => {
	console.log('store.js action: ', action);
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

//Store
const store = createStore(reducer);

export const actionCreator = {
	actionAdd,
	actionDelete,
};

export default store;

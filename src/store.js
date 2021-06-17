// import { createStore } from 'redux';
// import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';

//reducer
// const actionAdd = createAction('Add');
// const actionDelete = createAction('Delete');
// const Add = 'Add';
// const Delete = 'Delete';

// const actionAdd = (text) => {
// 	return {
// 		type: Add,
// 		text,
// 	};
// };
// const actionDelete = (id) => {
// 	return {
// 		type: Delete,
// 		id,
// 	};
// };
// console.log('store: ', actionAdd, actionDelete); // function형태
// console.log('store: ', actionAdd(), actionDelete());

const toDos = createSlice({
	name: 'toDosReducer',
	initialState: [],
	reducers: {
		csAdd: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
		csDel: (state, action) => state.filter((todo) => todo.id !== action.payload),
	},
});

// const reducer = createReducer([], {
// 	[actionAdd]: (state, action) => {
// 		state.push({ text: action.payload, id: Date.now() });
// 	},
// 	[actionDelete]: (state, action) => state.filter((todo) => todo.id !== action.payload),
// });
// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case actionAdd.type:
// 			console.log(action); //action.payload
// 			return [
// 				{
// 					text: action.payload,
// 					id: Date.now(),
// 				},
// 				...state,
// 			];
// 		case actionDelete.type:
// 			return state.filter((todo) => todo.id !== action.payload);
// 		default:
// 			return state;
// 	}
// };

//store
// const store = createStore(reducer);
// const store = configureStore({ reducer });

// export const actionCreator = {
// 	actionAdd,
// 	actionDelete,
// };

export const { csAdd, csDel } = toDos.actions;

// export default store;
export default configureStore({ reducer: toDos.reducer });

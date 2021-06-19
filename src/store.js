import { configureStore, createSlice } from '@reduxjs/toolkit';

const reducer = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		csAdd: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
		csDel: (state, action) => state.filter((todo) => todo.id !== action.payload),
	},
});
// console.log(reducer);
const store = configureStore({ reducer: reducer.reducer });

export const { csAdd, csDel } = reducer.actions;
export default store;

import { createStore } from 'redux';

// target
const form = document.querySelector('.container form');
const input = document.querySelector('.container input');
const ul = document.querySelector('.container ul');

// reducer
const add = 'Add';
const del = 'Del';

const addTodo = (text) => {
	return {
		type: add,
		text,
	};
};
const delTodo = (id) => {
	return {
		type: del,
		id,
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case add:
			return [
				{
					text: action.text,
					id: Date.now(),
				},
				...state,
			];
		case del:
			return state.filter((todo) => todo.id !== action.id);
		default:
			return;
	}
};

// store
const store = createStore(reducer);

// action
const dispatchAdd = (text) => {
	store.dispatch(addTodo(text));
};
const dispatchDel = (e) => {
	console.log(e.target.parentNode.id);
	const id = parseInt(e.target.parentNode.id);
	store.dispatch(delTodo(id));
};

// subscribe
const onChange = () => {
	const todos = store.getState();
	// console.log(store.getState());
	ul.innerHTML = '';
	todos.forEach((todo) => {
		const li = document.createElement('li');
		const btn = document.createElement('button');
		btn.innerText = 'del';
		btn.addEventListener('click', dispatchDel);
		li.id = todo.id;
		li.innerText = todo.text;
		li.append(btn);
		ul.append(li);
	});
};
store.subscribe(onChange);

const handleSubmit = (e) => {
	e.preventDefault();
	// console.log(e);
	// console.log('submit');
	const text = input.value;
	input.value = '';
	dispatchAdd(text);
};
form.addEventListener('submit', handleSubmit);

import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const reducer = (state = [], action) => {
	if (action.type === 'Add_todo') {
		console.log(action.text);
		return [...state, { text: action.text, id: Date.now() }];
	} else if (action.type === 'Del_todo') {
		return [];
	}
	return state;
};
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// const createTodo = (todo) => {
// 	const li = document.createElement('li');
// 	li.innerText = todo;
// 	ul.append(li);
// };
const onSubmit = (e) => {
	e.preventDefault();
	// console.log('submit');
	const todo = input.value;
	input.value = '';
	store.dispatch({ type: 'Add_todo', text: todo });
};
form.addEventListener('submit', onSubmit);

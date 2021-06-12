import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const addToDo = (text) => {
	return {
		type: 'Add_todo',
		text,
	};
};
const deleteToDo = (id) => {
	return {
		type: 'Del_todo',
		id,
	};
};

const reducer = (state = [], action) => {
	if (action.type === 'Add_todo') {
		console.log(action.text);
		return [{ text: action.text, id: Date.now() }, ...state];
	} else if (action.type === 'Del_todo') {
		return [];
	}
	return state;
};
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
	// store.dispatch({ type: 'Add_todo', text });
	store.dispatch(addToDo(text)); //redux안으로 input 가능
};
const dispatchDeleteTodo = (id) => {
	// console.log('delete');
	// console.log(e.target.parentNode.id);
	// store.dispatch({ type: 'Del_todo', id });
	store.dispatch(deleteToDo(id));
};

const paintTodo = () => {
	const todos = store.getState();
	ul.innerHTML = '';
	todos.forEach((todo) => {
		const li = document.createElement('li');
		const btn = document.createElement('button');
		btn.innerText = 'Del';
		btn.addEventListener('click', dispatchDeleteTodo);
		li.id = todo.id;
		li.innerText = todo.text;
		li.appendChild(btn);
		ul.appendChild(li);
	});
};
store.subscribe(paintTodo);

const onSubmit = (e) => {
	e.preventDefault();
	// console.log('submit');
	const todo = input.value;
	input.value = '';
	dispatchAddTodo(todo);
};
form.addEventListener('submit', onSubmit);

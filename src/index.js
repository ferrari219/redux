//targeting
const form = document.querySelector('.todo form');
const input = document.querySelector('.todo input');
const ul = document.querySelector('.todo ul');

// console.log(form, input, ul);

//action
const createTodo = (text) => {
	// console.log(text);
	const li = document.createElement('li');
	const btn = document.createElement('button');
	btn.innerText = 'Del';
	btn.addEventListener('onClick', () => {
		console.log('del');
	});
	li.innerText = text;
	li.id = Date.now();
	ul.append(li);
};
const handleSubmit = (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = '';
	createTodo(text);
};
form.addEventListener('submit', handleSubmit);

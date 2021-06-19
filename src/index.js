const number = document.querySelector('.count h1');
const add = document.querySelector('.count .add');
const minus = document.querySelector('.count .minus');

console.log(number, add, minus);

//initial
const handleUpdate = () => {
	number.innerText = count;
};
let count = 0;
handleUpdate();

//action
const handleAdd = () => {
	count++;
	console.log(count);
	handleUpdate();
};
const handleMinus = () => {
	count--;
	console.log(count);
	handleUpdate();
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

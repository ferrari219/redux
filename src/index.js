const add = document.getElementById('js_add');
const minus = document.getElementById('js_minus');
const number = document.querySelector('.number');

// console.log(add, minus, number);

let count = 0;
number.innerText = count;

const handleUpdate = () => {
	number.innerText = count;
};
const handleAdd = () => {
	// console.log('Add');
	count++;
	console.log(count);
	handleUpdate();
};
const handleMinus = () => {
	// console.log('Minus');
	count--;
	console.log(count);
	handleUpdate();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

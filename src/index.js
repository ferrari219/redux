const add = document.getElementById('js_add');
const minus = document.getElementById('js_minus');
const number = document.querySelector('.countView');

// console.log(add, minus, countView);

let count = 0;
number.innerText = count;

//function
const handleUpdate = () => {
	number.innerText = count;
};
const handleAdd = () => {
	// console.log('Add');
	count++;
	handleUpdate();
};
const handleMinus = () => {
	// console.log('Minus');
	count--;
	handleUpdate();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

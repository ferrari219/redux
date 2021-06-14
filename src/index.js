//타겟팅 설정
const number = document.querySelector('.counter .js_countView');
const add = document.querySelector('.counter .js_add');
const minus = document.querySelector('.counter .js_minus');
// console.log(number, add, minus);

//변수 초기값 셋팅
let count = 0;
number.innerText = count;

//액션 셋팅
const handleUpdate = (count) => {
	number.innerText = count;
};
const handleAdd = () => {
	// console.log('Add');
	count++;
	console.log(count);
	handleUpdate(count);
};
const handleMinus = () => {
	// console.log('Minus');
	count--;
	console.log(count);
	handleUpdate(count);
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

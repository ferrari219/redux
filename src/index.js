import { createStore } from 'redux';

const add = document.getElementById('js_add');
const minus = document.getElementById('js_minus');
const number = document.querySelector('.number');

// console.log(add, minus, number);
number.innerText = 0;

// 수정명령어 보관소
const reducer = (state = 0, { type }) => {
	// console.log('reducer:', state, action);
	if (type === 'Add') {
		// console.log('Add');
		return state + 1;
	} else if (type === 'Minus') {
		// console.log('Minus');
		return state - 1;
	} else return state;
};

// 저장소
const store = createStore(reducer);
console.log('store:', store);

// 구독
const numberUpdate = () => {
	number.innerText = store.getState();
	// console.log('detect');
};
store.subscribe(numberUpdate);

// 액션
const handleAdd = () => {
	store.dispatch({ type: 'Add' });
};
const handleMinus = () => {
	store.dispatch({ type: 'Minus' });
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

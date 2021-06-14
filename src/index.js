import { createStore } from 'redux';

//타겟팅 설정
const number = document.querySelector('.counter > .js_countView');
const add = document.querySelector('.counter > .js_add');
const minus = document.querySelector('.counter > .js_minus');
// console.log(number, add, minus);

//변수 초기값 셋팅
let count = 0;
number.innerText = count;

// reducer
const reducer = (state = 0, action) => {
	// console.log(state, action);
	switch (action.type) {
		case 'Add':
			return state + 1;
		case 'Minus':
			return state - 1;
		default:
			return state;
	}
};

// store
const store = createStore(reducer);

//subscribe
const onChange = () => {
	number.innerText = store.getState();
};
store.subscribe(onChange);

// action
const handleAdd = () => {
	store.dispatch({ type: 'Add' });
};
const handleMinus = () => {
	store.dispatch({ type: 'Minus' });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

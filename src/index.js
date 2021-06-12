import { createStore } from 'redux';

const add = document.getElementById('js_add');
const minus = document.getElementById('js_minus');
const number = document.querySelector('.number');

// console.log(add, minus, number);
number.innerText = 0;

// 수정명령어 보관소
const reducer = (state = 0, action) => {
	console.log('reducer:', state, action);
	if (action.type === 'Add') {
		console.log('Add');
		return state + 1;
	} else if (action.type === 'Minus') {
		console.log('Minus');
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
add.addEventListener('click', () => store.dispatch({ type: 'Add' }));
minus.addEventListener('click', () => store.dispatch({ type: 'Minus' }));

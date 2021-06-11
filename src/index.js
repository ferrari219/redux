//redux
import { createStore } from 'redux';

const add = document.getElementById('js_add');
const minus = document.getElementById('js_minus');
const number = document.querySelector('.countView');

// console.log(add, minus, countView);

const reducer = (state = 0, action) => {
	console.log(state, action); // action: @@redux/Init
	//리듀서는 타입을 통해 제어
	if (action.type === 'Add') {
		console.log('This is Add');
		return state + 1;
	} else if (action.type === 'Minus') {
		console.log('This is Minus');
		return state - 1;
	} else {
		return state;
	}
	return state;
}; // reducer: 내 데이터 변경

const store = createStore(reducer); // createStore: 내 데이터 저장소
console.log('Store:', store);

//action
store.dispatch({ type: 'Add' });
store.dispatch({ type: 'Add' });
store.dispatch({ type: 'Add' });
store.dispatch({ type: 'Add' });
store.dispatch({ type: 'Minus' });

//상태확인
console.log(store.getState());

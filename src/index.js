//redux, Done
import { createStore } from 'redux';

const add = document.querySelector('.js_add');
const minus = document.querySelector('.js_minus');
const number = document.querySelector('.js_countView');

// console.log(add, minus, countView);

// initial
number.innerText = 0;

// Reducer
const Add = 'Add';
const Minus = 'Minus';

const reducer = (state = 0, action) => {
	console.log(state, action); //action.type

	if (action.type === Add) return state + 1;
	else if (action.type === Minus) return state - 1;
	else return state;
};

// Store
const store = createStore(reducer);
// console.log(store);
/*
  dispatch,
  subscribe,
  getState,
  replaceReducer,
*/

// action
// store.dispatch({ type: 'Add' });
// store.dispatch({ type: 'Add' });
// store.dispatch({ type: 'Minus' });

// add.addEventListener('click', () => store.dispatch({ type: 'Add' }));
// minus.addEventListener('click', () => store.dispatch({ type: 'Minus' }));

const handleAdd = () => {
	store.dispatch({ type: Add });
};
const handleMinus = () => {
	store.dispatch({ type: Minus });
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

// subscribe
const onChange = () => {
	number.innerText = store.getState();
};
store.subscribe(onChange);

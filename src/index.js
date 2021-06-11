//redux
import { createStore } from 'redux';

const add = document.getElementById('js_add');
const minus = document.getElementById('js_minus');
const number = document.querySelector('.countView');

// console.log(add, minus, countView);

// Reducer
const reducer = (state = 0, action) => {
	console.log(state, action); //action.type

	if (action.type === 'Add') return state + 1;
	else if (action.type === 'Minus') return state - 1;
	else return state;
};

//

// Store
const store = createStore(reducer);
console.log(store);
/*
  dispatch,
  subscribe,
  getState,
  replaceReducer,
*/

// action
add.addEventListener('click', () => store.dispatch({ type: 'Add' }));
minus.addEventListener('click', () => store.dispatch({ type: 'Minus' }));
// store.dispatch({ type: 'Add' });
// store.dispatch({ type: 'Add' });
// store.dispatch({ type: 'Minus' });

// state
store.getState();

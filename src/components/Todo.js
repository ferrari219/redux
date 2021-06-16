import React from 'react';

const Todo = (todo) => {
	return (
		<li>
			{todo.text} <button>Del</button>
		</li>
	);
};

export default Todo;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Todo from '../components/Todo';

const Home = ({ todos, addTodo }) => {
	// console.log(props);
	// console.log(todos, dispatch);
	const [value, setValue] = useState('');
	const onChange = (e) => {
		const value = e.target.value;
		// console.log(value);
		setValue(value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(value);
		setValue('');
		addTodo(value);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={onChange} />
				<button>Add</button>
			</form>
			{/* <ul>{JSON.stringify(todos)}</ul> */}
			<ul>
				{todos.map((todo) => (
					<Todo {...todo} key={todo.id} />
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps);
	return { todos: state };
};
const mapDispatchToProps = (dispatch, ownProps) => {
	console.log(dispatch, ownProps);
	return {
		addTodo: (text) => dispatch(actionCreators.actionAdd(text)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

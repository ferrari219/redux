import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';

const Home = ({ state, addTodo }) => {
	// console.log('Home.js > Home :', state, dispatch);
	const [value, setValue] = useState('');
	const onChange = (e) => {
		const value = e.target.value;
		setValue(value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('onSubmit: ', value);
		setValue('');
		addTodo(value);
	};
	return (
		<div>
			<h3>test</h3>
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>{JSON.stringify(state)}</ul>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log('Home.js > mapStateToProps :', state, ownProps);
	return { state: state };
};
const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('Home.js > mapDispatchToProps :', dispatch, ownProps);
	// return dispatch
	return {
		addTodo: (text) => dispatch(actionCreator.actionAdd(text)),
		deleteTodo: (id) => dispatch(actionCreator.actionDelete(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const Home = ({ todos, addToDo }) => {
	// console.log(props);
	const [text, setText] = useState('');
	const onChange = (e) => {
		const text = e.target.value;
		setText(text);
		// console.log(text);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		// console.log('onSubmit');
		console.log(text);
		setText('');
		addToDo(text);
	};
	return (
		<div>
			<h3>test</h3>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>{JSON.stringify(todos)}</ul>
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
		addToDo: (text) => dispatch(actionCreators.addToDo(text)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

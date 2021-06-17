import React from 'react';
import { connect } from 'react-redux';
// import { actionCreator } from '../store';
import { csDel } from '../store';
import { Link } from 'react-router-dom';

const Todo = (todo) => {
	return (
		<li>
			<Link to={`/${todo.id}`}>{todo.text}</Link>
			<button onClick={todo.deleteTodo}>Del</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps: ', ownProps);
	return {
		deleteTodo: () => dispatch(csDel(ownProps.id)),
	};
};
export default connect(null, mapDispatchToProps)(Todo);

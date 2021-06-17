import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';

const Todo = (todo) => {
	return (
		<li>
			{todo.text} <button onClick={todo.deleteTodo}>Del</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps: ', ownProps);
	return {
		deleteTodo: () => dispatch(actionCreator.actionDelete(ownProps.id)),
	};
};
export default connect(null, mapDispatchToProps)(Todo);

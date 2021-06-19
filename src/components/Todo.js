import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { csDel } from '../store';

const Todo = (item) => {
	console.log('Todo:', item);
	return (
		<li>
			<Link to={`/${item.id}`}>{item.text}</Link>
			<button onClick={item.del}>Del</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps: ', dispatch, ownProps);
	return {
		del: () => dispatch(csDel(ownProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(Todo);

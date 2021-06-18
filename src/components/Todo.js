import React from 'react';
import { connect } from 'react-redux';
import { csDel } from '../store';
import { Link } from 'react-router-dom';

const Todo = (item) => {
	return (
		<li>
			<Link to={`/${item.id}`}>{item.text}</Link>
			<button onClick={item.del}>Del</button>
		</li>
	);
};
const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps:', ownProps);
	return {
		del: () => dispatch(csDel(ownProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(Todo);

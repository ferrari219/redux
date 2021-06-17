import React from 'react';
import { connect } from 'react-redux';

const Detail = (props) => {
	console.log('Detail:', props);
	return (
		<div>
			<h3>{props.todo.text}</h3>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps:', state, ownProps);
	// console.log(ownProps.match.params.id);
	return { todo: state.find((todo) => todo.id === parseInt(ownProps.match.params.id)) };
};
export default connect(mapStateToProps)(Detail);

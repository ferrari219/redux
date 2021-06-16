import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const Todo = ({ text, onBtnClick }) => {
	return (
		<li>
			{text} <button onClick={onBtnClick}>DEL</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log(ownProps);
	return {
		onBtnClick: () => dispatch(actionCreators.actionDelete(ownProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(Todo);

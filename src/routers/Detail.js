import React from 'react';
import { connect } from 'react-redux';

const Detail = (props) => {
	console.log('Detail: ', props);
	return (
		<div>
			<h1>{props.detail.text}</h1>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log('Detail mapStateToProps :', state, ownProps);
	return {
		detail: state.find((item) => item.id === parseInt(ownProps.match.params.id)),
	};
};

export default connect(mapStateToProps)(Detail);

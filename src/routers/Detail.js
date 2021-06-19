import React from 'react';
import { connect } from 'react-redux';

const Detail = (props) => {
	console.log('Detail: ', props);
	return (
		<section>
			<h1>Detail</h1>
			<p>{props.state.text}</p>
		</section>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log('Detail mapStateToProps: ', state, ownProps);
	return { state: state.find((item) => item.id === parseInt(ownProps.match.params.id)) };
};

export default connect(mapStateToProps)(Detail);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { csAdd } from '../store';
import Todo from '../components/Todo';

const Home = (props) => {
	console.log(props);
	const [value, setValue] = useState('');
	const onChange = (e) => {
		const value = e.target.value;
		setValue(value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('onSubmit');
		setValue('');
		props.add(value);
	};
	return (
		<section>
			<h3>Home</h3>
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>{JSON.stringify(props.state)}</ul>
			<ul>
				{props.state.map((item) => (
					<Todo {...item} key={item.id} />
				))}
			</ul>
		</section>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps: ', state, ownProps);
	return { state: state };
};
const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps: ', dispatch, ownProps);
	return {
		add: (payload) => dispatch(csAdd(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

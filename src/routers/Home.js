import React, { useState } from 'react';
import { connect } from 'react-redux';
import { csAdd } from '../store';
import Todo from '../components/Todo';

const Home = (props) => {
	console.log('Home:', props);
	const [value, setValue] = useState('');
	const onChange = (e) => {
		const value = e.target.value;
		setValue(value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		setValue('');
		props.add(value);
	};
	return (
		<div>
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
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	// console.log(state, ownProps);
	return { state: state };
};
const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps:', ownProps);
	return {
		add: (payload) => dispatch(csAdd(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

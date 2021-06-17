import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
// import { actionCreator } from '../store';
import { csAdd } from '../store';

const Home = (props) => {
	console.log('Home:', props);
	const [value, setValue] = useState('');

	const onChange = (e) => {
		const value = e.target.value;
		// console.log(value);
		setValue(value);
	};
	const onSubmit = (e) => {
		console.log(value);
		setValue('');
		props.addTodo(value);
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
				{props.state.map((todo) => (
					<Todo {...todo} key={todo.id} />
				))}
			</ul>
		</div>
	);
};

//connect를 통해 원래의 props에 mapStateToProps, mapDispatchToProps를 추가함.
//Home에서 props로 받는다.

// current State
const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps:', state, ownProps);
	return { state };
};
// dispatch
const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps:', dispatch, ownProps);
	return {
		// addTodo: (text) => dispatch(actionCreator.actionAdd(text)), //헷갈리지 않게 payload로 변경
		// addTodo: (payload) => dispatch(actionCreator.actionAdd(payload)),
		addTodo: (payload) => dispatch(csAdd(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

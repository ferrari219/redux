import React, { useState } from 'react';

const Home = () => {
	const [text, setText] = useState('');
	const onChange = (e) => {
		const value = e.target.value;
		setText(value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(text);
		setText('');
	};
	return (
		<div>
			<h1>To do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
		</div>
	);
};

export default Home;

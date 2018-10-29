import React, { Component } from 'react';

const Form2 = (props) =>{
	return(
		<form onSubmit={props.getUser}>
			<input type="text" name="username2" />
			<button>Submit</button>
		</form>
	);
}

export default Form2;
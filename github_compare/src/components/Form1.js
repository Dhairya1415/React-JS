import React, { Component } from 'react';

const Form1 = (props) =>{
	return(
		<form onSubmit={props.getUser}>
			<input type="text" name="username1" />
			<button>Submit</button>
		</form>
	);
}

export default Form1;
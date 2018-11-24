import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

class Search extends Component {
	state = {
		searchText: '',
		amount: 15,
		apiUrl: "https://pixabay.com/api",
		apiKey: "10791882-1912a3a2ddb5bd0ddbed9968c",
		images: [] 
	}

	render(){
		return(
			<div>
				<TextField 
					name="searchText"
					floatingLabelText="Seacr for Images"
					fullWidth={true}
					value={this.state.searchText}
					onchange={this.onTextChange}
				/>
			</div>
		);
	}
}

export default Search;
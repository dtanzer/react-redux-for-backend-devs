import React from 'react';

export class MyInput extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			inputValue: "Hello"
		};
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.inputValue} />
				<p>{this.state.inputValue}</p>
			</div>
		);
	}
}

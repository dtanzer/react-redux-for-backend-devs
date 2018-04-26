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
				<input type="text" value={this.state.inputValue} onChange={this._inputChanged.bind(this)}/>
				<p>{this.state.inputValue}</p>
			</div>
		);
	}

	_inputChanged(e) {
		this.setState({ inputValue: e.target.value });
	}
}

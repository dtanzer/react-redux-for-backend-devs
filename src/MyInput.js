import React from 'react';
import { connect } from 'react-redux';

export class MyInput extends React.Component {
	render() {
		return (
			<div>
				<input type="text" value={this.props.inputValue} onChange={this._greetingChanged.bind(this)} />
				<p>{this.props.inputValue}</p>
			</div>
		);
	}

	_greetingChanged(e) {
		this.props.greetingChanged(e.target.value);
	}
}

export function mapStateToProps(state) {
	return {
		inputValue: state.someForm.inputValue
	}
}

function greetingChanged(newGreeting) {
	return {
		type: 'GREETING_CHANGED',
		newGreeting
	}
}

const actionCreators = {
	greetingChanged
}

export const MyInputContainer = connect(mapStateToProps, actionCreators)(MyInput);
import React from 'react';
import { connect } from 'react-redux';

export class MyInput extends React.Component {
	render() {
	  return (
		<div>
			<input type="text" value={this.props.inputValue} />
			<p>{this.props.inputValue}</p>
		</div>
	);
	}
}

export function mapStateToProps(state) {
	return {
		inputValue: state.someForm.inputValue
	}
}

export const MyInputContainer = connect(mapStateToProps)(MyInput);
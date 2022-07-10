import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../reducers/counter";

class Counter extends Component {
	constructor(props) {
		super(props);
	}
	handleIncrement = () => {
		this.props.incrementCounter();
	};
	handleDecrement = () => {
		this.props.decrementCounter();
	};
	render() {
		return (
			<div style={{ padding: 10 }}>
				<span style={{ marginRight: 10 }}>
					Counter: {this.props.counterState}
				</span>
				<button onClick={this.handleIncrement}>Increment</button>
				<button onClick={this.handleDecrement}>Decrement</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counterState: state.counter.count,
	};
};

const mapDispatchToProps = { incrementCounter, decrementCounter };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
	constructor(props) {
		super(props);
		console.log("counter", props);
	}
	render() {
		return (
			<div style={{ border: "1px solid black", padding: 10 }}>
				<span style={{ marginRight: 10 }}>Nabar</span>
				<span style={{ fontWeight: "bold" }}>
					Counter: {this.props.counterState}
				</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counterState: state.counter.count,
	};
};

export default connect(mapStateToProps, {})(Navbar);

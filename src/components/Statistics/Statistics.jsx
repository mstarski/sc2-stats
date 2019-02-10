import React from "react";
import { withRouter } from "react-router-dom";

class Statistics extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props);
		return <h1>Statistics</h1>;
	}
}

export default withRouter(Statistics);

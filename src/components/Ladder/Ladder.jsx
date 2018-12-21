import React, { Component } from "react";
import { Pane, Heading, Badge } from "evergreen-ui";

class Ladder extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log(this.props);
		return (
			<Pane>
				<Heading is={"h2"} size={800} padding={"1rem"}>
					Ladder
				</Heading>
			</Pane>
		);
	}
}

export default Ladder;

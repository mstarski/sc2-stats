import React from "react";
import { Dialog, Pane, Heading, Strong, Text } from "evergreen-ui";

class PlayerPreview extends React.Component {

	componentDidMount() {
		
	}

	render() {
		console.log(this.props);
		return (
			<Dialog
				isShown={this.props.isShown}
				onCloseComplete={this.props.onClose}
				hasHeader={false}
				hasFooter={false}
			>
				<h1>aaa</h1>
			</Dialog>
		);
	}
}

export default PlayerPreview;

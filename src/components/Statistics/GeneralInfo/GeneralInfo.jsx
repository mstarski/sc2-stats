import React from "react";
import { Heading, Pane } from "evergreen-ui";

//TODO REMOVE SCROLL LISTENER FROM THIS COMPONENT
const blockStyles = {
	background: "tint2",
	width: "90%",
	height: "30vh",
	elevation: 1,
};

function GeneralInfo(props) {
	console.log(props);
	const { summary } = props.data;
	return (
		<Pane className="statistics" width="100%" height="80vh" paddingX="1rem">
			<Heading paddingX="1rem" is="h2" fontSize="2rem">
				{summary.displayName}'s Statistics
			</Heading>
			<Pane className="statistics__upper-grid">
				<Pane {...blockStyles}>
					<Heading>Win ratio</Heading>
				</Pane>
				<Pane {...blockStyles}>
					<Heading>Total achievement points</Heading>
				</Pane>
			</Pane>
		</Pane>
	);
}

export default GeneralInfo;

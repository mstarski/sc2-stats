import React from "react";
import { Pane, Heading } from "evergreen-ui";

function LadderNotFound(props) {
	return (
		<Pane
			width="100vw"
			height="90vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Heading is="h2" size={800}>
				No ladders currrently
			</Heading>
		</Pane>
	);
}

export default LadderNotFound;

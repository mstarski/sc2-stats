import React from "react";
import { Heading, Pane, Badge, Button } from "evergreen-ui";
import SideSheetComponent from "../SideSheet/SideSheet";
import { withRouter } from "react-router-dom";

function Header(props) {
	return (
		<Pane
			width="100vw"
			height="8vh"
			display="flex"
			alignItems="center"
			padding={10}
			justifyContent="space-between"
		>
			<Button onClick={() => props.history.goBack()} appearance="primary">
				Go back
			</Button>
			<Heading is={"h1"} size={800}>
				SC II Stats
				<Badge color="neutral" isSolid>
					Beta
				</Badge>
			</Heading>
			<SideSheetComponent />
		</Pane>
	);
}

module.exports = withRouter(Header);

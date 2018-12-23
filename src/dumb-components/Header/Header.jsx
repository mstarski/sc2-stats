import React from "react";
import { Heading, Pane, Badge } from "evergreen-ui";
import SideSheetComponent from "../SideSheet/SideSheet";

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

module.exports = Header;

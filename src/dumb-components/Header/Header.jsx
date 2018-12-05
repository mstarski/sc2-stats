const React = require("react");
const { Heading, Pane, Badge } = require("evergreen-ui");
const SideSheetComponent = require("../SideSheet/SideSheet");

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

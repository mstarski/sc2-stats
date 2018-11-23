const React = require("react");
const { Pane, Heading } = require("evergreen-ui");

function CurrentSeasonHighlight(props) {
	return (
		<Pane>
			<Heading is={"h3"}>Current Season</Heading>
			<Pane height="90%" width="96%" background="tint1" />
		</Pane>
	);
}

module.exports = CurrentSeasonHighlight;

const React = require("react");
const { Pane, Heading } = require("evergreen-ui");

function CampaignHighlight(props) {
	return (
		<Pane>
			<Heading is={"h3"}>Campaign</Heading>
			<Pane width="98%" height="90%" background="tint1" />
		</Pane>
	);
}

module.exports = CampaignHighlight;

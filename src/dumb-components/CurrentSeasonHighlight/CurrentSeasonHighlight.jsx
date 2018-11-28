const React = require("react");
const { Pane, Heading } = require("evergreen-ui");
const Translator = require("../../utilities/Translator");

function CurrentSeasonHighlight(props) {
	const { career } = props;

	const current1v1 = Translator.rankToIcon(career.current1v1LeagueName);
	const currentTeam = Translator.rankToIcon(career.currentBestTeamLeagueName);

	return (
		<Pane>
			<Heading is={"h3"}>Current Season</Heading>
			<Pane height="90%" width="96%" background="tint1">
				<Pane display="grid" gridTemplateColumns="1fr 1fr">
					<Pane textAlign="center">
						<Heading is={"h4"}>1v1</Heading>
					</Pane>
					<Pane textAlign="center">
						<Heading is={"h4"}>Team</Heading>
					</Pane>
				</Pane>
			</Pane>
		</Pane>
	);
}

module.exports = CurrentSeasonHighlight;

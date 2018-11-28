const React = require("react");
const { Pane, Heading, Avatar, Strong } = require("evergreen-ui");
const Translator = require("../../utilities/Translator");
const RaceWins = require("./RaceWins");

function CurrentSeasonHighlight(props) {
	const { career } = props;

	const current1v1 = Translator.rankToIcon(career.current1v1LeagueName);
	const currentTeam = Translator.rankToIcon(career.currentBestTeamLeagueName);

	return (
		<Pane>
			<Heading is={"h3"}>Current Season</Heading>
			<Pane height="90%" width="96%">
				<Pane display="grid" gridTemplateColumns="1fr 1fr">
					<Pane
						display="flex"
						flexFlow="column"
						justifyContent="center"
						alignItems="center"
					>
						<Heading marginBottom=".5rem" is={"h4"}>
							1v1
						</Heading>
						{current1v1 ? (
							<img
								style={assetProperties}
								src={current1v1}
								alt="1v1 League"
							/>
						) : (
							<Avatar size={80} />
						)}
						<Strong>
							{!career.current1v1LeagueName
								? "Unranked"
								: career.current1v1LeagueName}
						</Strong>
					</Pane>
					<Pane
						display="flex"
						flexFlow="column"
						justifyContent="center"
						alignItems="center"
					>
						<Heading marginBottom=".5rem" is={"h4"}>
							Team
						</Heading>
						{currentTeam ? (
							<img
								style={assetProperties}
								src={current1v1}
								alt="1v1 League"
							/>
						) : (
							<Avatar size={80} />
						)}
						<Strong>
							{!career.currentBestTeamLeagueName
								? "Unranked"
								: career.currentBestTeamLeagueName}
						</Strong>
					</Pane>
				</Pane>
				<Pane
					marginTop="3rem"
					display="grid"
					gridTemplateColumns="1fr 1fr"
				>
					<Pane borderRight="1px solid #e1e1e1">
						<RaceWins race="zerg" win_count={career.zergWins} />
						<RaceWins race="terran" win_count={career.terranWins} />
						<RaceWins
							race="protoss"
							win_count={career.protossWins}
						/>
					</Pane>
				</Pane>
			</Pane>
		</Pane>
	);
}

module.exports = CurrentSeasonHighlight;

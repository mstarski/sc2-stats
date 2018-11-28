const React = require("react");
const { Pane, Text, Heading } = require("evergreen-ui");

//Assets
const ZergGIF = require("../../../assets/carbot_zergling.gif");
const TerranGIF = require("../../../assets/carbot_marine.gif");
const ProtossGIF = require("../../../assets/carbot_zealot.gif");
const Trophy = require("../../../assets/trophy_icon.png");

function RaceWins(props) {
	const assetProperties = {
		width: 80,
		height: 80,
	};

	const raceToProperties = {
		zerg: {
			src: ZergGIF,
			alt: "Zerg Wins",
		},
		terran: {
			src: TerranGIF,
			alt: "Terran Wins",
		},
		protoss: {
			src: ProtossGIF,
			alt: "Protoss Wins",
		},
	};

	return (
		<Pane display="flex" alignItems="center">
			<img
				style={assetProperties}
				src={raceToProperties[props.race].src}
				alt={raceToProperties[props.race].alt}
			/>
			<img style={{ width: 30, height: 30 }} src={Trophy} alt="Trophy" />
			<Heading marginLeft={20} size={900}>
				{props.win_count}
			</Heading>
		</Pane>
	);
}

module.exports = RaceWins;

//Packages
const React = require("react");
const { Pane, Heading, Button, Badge } = require("evergreen-ui");

//Campaign Logos
const WingsOfLiberty = require("../../../assets/sc2_wol_logo.png");
const HeartOfTheSwarm = require("../../../assets/sc2_hots_logo.png");
const LegacyOfTheVoid = require("../../../assets/sc2_lotv_logo.png");

function CampaignHighlight(props) {
	difficultyToColor = {
		BRUTAL: "red",
		HARD: "purple",
		NORMAL: "green",
	};

	console.log(props);
	return (
		<Pane>
			<Heading is={"h3"}>Campaign</Heading>
			<Pane
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				width="98%"
				height="90%"
			>
				<Button marginRight={12} iconBefore="arrow-left">
					Lotv
				</Button>
				<img
					style={{ width: 200, height: 80 }}
					src={WingsOfLiberty}
					alt="WingsOfLiberty"
				/>
				<Heading marginLeft={20} is={"h4"}>
					Difficulty:{" "}
					<Badge color={difficultyToColor["BRUTAL"]} isSolid>
						Brutal
					</Badge>
				</Heading>
				<Button marginRight={12} iconBefore="arrow-right">
					Hots
				</Button>
			</Pane>
		</Pane>
	);
}

module.exports = CampaignHighlight;

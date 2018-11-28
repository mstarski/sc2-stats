//Packages
const React = require("react");
const { Pane, Heading, Button, Badge } = require("evergreen-ui");

//Campaign Logos
const WingsOfLiberty = require("../../../assets/sc2_wol_logo.png");
const HeartOfTheSwarm = require("../../../assets/sc2_hots_logo.png");
const LegacyOfTheVoid = require("../../../assets/sc2_lotv_logo.png");

function CampaignHighlight(props) {
	const difficultyToColor = {
		BRUTAL: "red",
		HARD: "purple",
		NORMAL: "green",
	};

	const expansions = {
		WoL: [WingsOfLiberty, "wings-of-liberty", ["Lotv", "HotS"]],
		HotS: [HeartOfTheSwarm, "heart-of-the-swarm", ["WoL", "LotV"]],
		LotV: [LegacyOfTheVoid, "legacy-of-the-void", ["HotS", "WoL"]],
	};
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
				<Button
					onClick={() => props.changeSlide("backward")}
					marginRight={12}
					iconBefore="arrow-left"
				>
					{
						expansions[
							Object.keys(expansions)[Math.abs(props.slide)]
						][2][0]
					}
				</Button>
				<img
					style={{ width: 200, height: 80 }}
					src={
						expansions[
							Object.keys(expansions)[Math.abs(props.slide)]
						][0]
					}
					alt="Expansion Name"
				/>
				<Heading marginLeft={20} is={"h4"}>
					Difficulty:{" "}
					<Badge
						color={
							difficultyToColor[
								props.data.difficultyCompleted[
									expansions[
										Object.keys(expansions)[
											Math.abs(props.slide)
										]
									][1]
								]
							]
						}
						isSolid
					>
						{
							props.data.difficultyCompleted[
								expansions[
									Object.keys(expansions)[
										Math.abs(props.slide)
									]
								][1]
							]
						}
					</Badge>
				</Heading>
				<Button
					onClick={() => props.changeSlide("forward")}
					marginRight={12}
					iconBefore="arrow-right"
				>
					{
						expansions[
							Object.keys(expansions)[Math.abs(props.slide)]
						][2][1]
					}
				</Button>
			</Pane>
		</Pane>
	);
}

module.exports = CampaignHighlight;

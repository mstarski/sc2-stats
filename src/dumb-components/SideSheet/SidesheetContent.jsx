const React = require("react");
const { Pane, Heading, TabNavigation, SidebarTab } = require("evergreen-ui");
const BroodLordGIF = require("../../../assets/carbot_broodlord.gif");

function SidesheetContent(props) {
	const optionItems = [
		"Change profile",
		"Ladder",
		"Achievements",
		"Statistics",
		"Replay Analysis",
		"Logout",
	];

	return (
		<Pane>
			<img
				style={{ width: "100px", height: "50px" }}
				src={BroodLordGIF}
				alt="Broodlord GIF"
			/>
			<TabNavigation marginX={-4} marginBottom={16}>
				{optionItems.map((tab, index) => (
					<SidebarTab
						key={tab}
						is="a"
						href="#"
						id={tab}
						isSelected={index === 0}
					>
						{tab}
					</SidebarTab>
				))}
			</TabNavigation>
		</Pane>
	);
}

module.exports = SidesheetContent;

const React = require("react");
const { Pane, TabNavigation, SidebarTab } = require("evergreen-ui");
const BroodLordGIF = require("../../../assets/carbot_broodlord.gif");

function SidesheetContent(props) {
	const { handlers } = props;

	const optionItems = {
		change_profile: {
			label: "Change profile",
			onSelect: () => handlers.changeProfile(),
		},
		ladder: {
			label: "Ladder",
			onSelect: () => {},
		},
		achievements: {
			label: "Achievements",
			onSelect: () => {},
		},
		statistics: {
			label: "Statistics",
			onSelect: () => {},
		},
		replay_analysis: {
			label: "Replay Analysis",
			onSelect: () => {},
		},
		logout: {
			label: "Logout",
			onSelect: () => handlers.logout(),
		},
	};

	return (
		<Pane>
			<img
				style={{ width: "100px", height: "50px" }}
				src={BroodLordGIF}
				alt="Broodlord GIF"
			/>
			<TabNavigation marginX={-4} marginBottom={16}>
				{Object.keys(optionItems).map((option, index) => (
					<SidebarTab
						key={optionItems[option].label}
						is="span"
						onSelect={optionItems[option].onSelect}
						id={"i" + index}
					>
						{optionItems[option].label}
					</SidebarTab>
				))}
			</TabNavigation>
		</Pane>
	);
}

module.exports = SidesheetContent;

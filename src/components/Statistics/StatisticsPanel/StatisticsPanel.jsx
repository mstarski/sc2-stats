import React from "react";
import Matchups from "../Matchups/Matchups";
import MatchHistory from "../MatchHistory/MatchHistory";

const Panels = {
	Matchups: {
		index: 0,
		component: <Matchups />,
	},
	MatchHistory: {
		index: 1,
		component: <MatchHistory />,
	},
};

function StatisticsPanel(props) {
	const { selectedIndex } = props;
	const panelToDisplay = Object.keys(Panels)
		.filter(panel => Panels[panel].index === selectedIndex)
		.join();
	return Panels[panelToDisplay].component || null;
}

export default StatisticsPanel;

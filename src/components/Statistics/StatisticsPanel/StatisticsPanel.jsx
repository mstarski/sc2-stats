import React from "react";
import MatchHistory from "../MatchHistory/MatchHistory";
import Graphs from "../Graphs/Graphs";

function StatisticsPanel(props) {
	const Panels = {
		MatchHistory: {
			index: 0,
			component: <MatchHistory />,
		},
		Graphs: {
			index: 1,
			component: <Graphs matchHistory={props.matchHistory} />,
		},
	};

	const { selectedIndex } = props;
	const panelToDisplay = Object.keys(Panels)
		.filter(panel => Panels[panel].index === selectedIndex)
		.join();
	return Panels[panelToDisplay].component || null;
}

export default StatisticsPanel;

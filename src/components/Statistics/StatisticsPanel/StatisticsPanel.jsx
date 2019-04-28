import React from "react";
import Graphs from "../Graphs/Graphs";

function StatisticsPanel(props) {
	const Panels = {
		Matchups: {
			index: 0,
			component: null,
		},
		Graphs: {
			index: 1,
			component: (
				<Graphs
					graphIndex={props.graphIndex}
					matchHistory={props.matchHistory}
				/>
			),
		},
	};

	const { selectedIndex } = props;
	const panelToDisplay = Object.keys(Panels)
		.filter(panel => Panels[panel].index === selectedIndex)
		.join();
	return Panels[panelToDisplay].component || null;
}

export default StatisticsPanel;

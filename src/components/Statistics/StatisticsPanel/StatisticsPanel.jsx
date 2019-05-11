import React from "react";
import Graphs from "../Graphs/Graphs";

function StatisticsPanel(props) {
	const Panels = {
		GeneralInfo: {
			index: 1,
			component: null,
		},
		Graphs: {
			index: 0, //testing only
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

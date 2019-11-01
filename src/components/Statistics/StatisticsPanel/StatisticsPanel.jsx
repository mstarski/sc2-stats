import React from "react";
import Graphs from "../Graphs/Graphs";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import DataProvider from "../../../utilities/DataProvider";
import global from "../../../utilities/globalVariables";

function StatisticsPanel(props) {
	const { region, regionId, realmId, profileId } = global();
	const GeneralInfoComponent = DataProvider(
		GeneralInfo,
		region,
		`/profile/${regionId}/${realmId}/${profileId}`,
		{ match_history: props.matchHistory }
	);
	const Panels = {
		GeneralInfo: {
			index: 0,
			component: <GeneralInfoComponent />,
		},
		Graphs: {
			index: 1,
			component: (
				<Graphs
					graphIndex={props.graphIndex}
					matchHistory={props.matchHistory}
					graphTabChange={props.graphTabChange}
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

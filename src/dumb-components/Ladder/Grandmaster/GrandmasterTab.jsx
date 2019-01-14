import React from "react";
import { SidebarTab } from "evergreen-ui";

function GrandmasterTab(props) {
	const { currentSeason, setIndex } = props;
	return (
		<SidebarTab
			key={99}
			id={99}
			onSelect={() => setIndex(currentSeason[0].ladder.length)}
			isSelected={currentSeason[0].ladder.length === props.selectedIndex}
			aria-controls={`panel-grandmaster`}
		>
			Grandmaster
		</SidebarTab>
	);
}

export default GrandmasterTab;

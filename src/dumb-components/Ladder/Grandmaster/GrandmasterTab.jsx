import React from "react";
import { SidebarTab } from "evergreen-ui";

function GrandmasterTab(props) {
	const { currentSeason } = props;
	return (
		<SidebarTab
			key={99}
			id={99}
			onSelect={() =>
				props.context.setState({
					selectedIndex: currentSeason[0].ladder.length,
				})
			}
			isSelected={
				currentSeason[0].ladder.length ===
				props.context.state.selectedIndex
			}
			aria-controls={`panel-grandmaster`}
		>
			Grandmaster
		</SidebarTab>
	);
}

export default GrandmasterTab;

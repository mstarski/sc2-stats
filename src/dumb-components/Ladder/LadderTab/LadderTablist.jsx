import React from "react";
import { Tablist, SidebarTab } from "evergreen-ui";
import GrandmasterTab from "../Grandmaster/GrandmasterTab";

function LadderTablist(props) {
	const { currentSeason, setIndex, selectedIndex } = props;
	return (
		<Tablist marginBottom={16} flexBasis={240} marginRight={24}>
			{currentSeason.map(entry =>
				entry.ladder.map((ladder, index) => {
					return (
						<SidebarTab
							key={ladder.ladderId}
							id={ladder.ladderId}
							onSelect={() => setIndex(index)}
							isSelected={index === selectedIndex}
							aria-controls={`panel-${ladder.ladderName}`}
						>
							{`${ladder.ladderName} - ${ladder.league} ${
								ladder.matchMakingQueue
							}`}
						</SidebarTab>
					);
				})
			)}
			<GrandmasterTab
				setIndex={setIndex}
				selectedIndex={selectedIndex}
				currentSeason={currentSeason}
			/>
		</Tablist>
	);
}

export default LadderTablist;

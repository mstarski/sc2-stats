import React from "react";
import { Pane } from "evergreen-ui";
import LadderPreview from "../LadderPreview/LadderPreview";
import DataProvider from "../../../utilities/DataProvider";
import GrandmasterPanel from "../Grandmaster/GrandmasterPanel";

function LadderPanel(props) {
	const regionId = localStorage.getItem("regionId"),
		region = localStorage.getItem("region"),
		realmId = localStorage.getItem("realmId"),
		profileId = localStorage.getItem("profileId");
	const { currentSeason, context, highlightPlayer } = props;
	const GrandMasterPanel = DataProvider(
		GrandmasterPanel,
		region,
		`ladder/grandmaster/${regionId}`,
		{ context: context, currentSeason, highlightPlayer }
	);

	return (
		<React.Fragment>
			<Pane overflow="scroll" padding={16} background="tint1" flex="1">
				{currentSeason[0].ladder.map((ladder, index) => {
					if (ladder.league === "GRANDMASTER")
						context.setState({
							isGrandmaster: true,
						});
					const LadderView = DataProvider(
						LadderPreview,
						region,
						`profile/${regionId}/${realmId}/${profileId}/ladder/${
							ladder.ladderId
						}`,
						{
							...ladder,
							highlightPlayer,
						}
					);
					return (
						<Pane
							key={ladder.ladderId}
							id={`panel-${ladder.ladderName}`}
							role="tabpanel"
							aria-labelledby={ladder.ladderName}
							aria-hidden={index !== context.state.selectedIndex}
							display={
								index === context.state.selectedIndex
									? "block"
									: "none"
							}
						>
							<LadderView />
						</Pane>
					);
				})}
				{context.state.isGrandmaster ? null : <GrandMasterPanel />}
			</Pane>
		</React.Fragment>
	);
}

export default LadderPanel;

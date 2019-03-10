import React from "react";
import { Pane } from "evergreen-ui";
import LadderTable from "../LadderTable/LadderTable";
import LadderHeader from "../LadderHeader/LadderHeader";

function GrandmasterPanel(props) {
	const { currentSeason, selectedIndex } = props;
	return (
		<Pane
			key={99}
			id={`panel-grandmaster`}
			role="tabpanel"
			aria-labelledby={"Grandmaster"}
			aria-hidden={currentSeason[0].ladder.length + 1 !== selectedIndex}
		>
			<Pane
				display="grid"
				gridTemplateColumns="20% 70% "
				alignItems="center"
			>
				<LadderHeader
					league="GRANDMASTER"
					ladderName="Grandmaster"
					ladderId="--"
					data={{
						currentLadderMembership: {
							localizedGameMode: "1v1",
						},
					}}
				/>
				<LadderTable ladderTeams={props.data.ladderTeams} />
			</Pane>
		</Pane>
	);
}

export default GrandmasterPanel;

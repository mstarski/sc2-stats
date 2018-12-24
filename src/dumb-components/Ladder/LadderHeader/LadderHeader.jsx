import React from "react";
import { Pane, Text, Strong } from "evergreen-ui";
import Translator from "../../../utilities/Translator";

function LadderHeader(props) {
	return (
		<React.Fragment>
			<img
				name={props.league}
				src={Translator.rankToIcon(props.league)}
				style={{ width: 90, height: 100 }}
				alt="league_image"
			/>
			<Pane display="flex" justifyContent="space-around">
				<Text>
					Ladder Name <br />
					<Strong>{props.ladderName}</Strong>
				</Text>
				<div
					style={{
						display:
							props.ladderName === "Grandmaster"
								? "none"
								: "flex",
						justifyContent: "space-around",
						width: "45%",
					}}
				>
					<Text>
						Ladder Id <br />
						<Strong>{props.ladderId}</Strong>
					</Text>
					<Text>
						Rank <br />
						<Strong>{props.rank}</Strong>
					</Text>
				</div>
				<Text>
					Mode
					<br />
					<Strong>
						{props.data.currentLadderMembership.localizedGameMode}
					</Strong>
				</Text>
			</Pane>
		</React.Fragment>
	);
}

export default LadderHeader;

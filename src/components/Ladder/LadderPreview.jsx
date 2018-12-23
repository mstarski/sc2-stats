import React, { Component } from "react";
import { Pane, Strong, Heading, Text } from "evergreen-ui";
import Translator from "../../utilities/Translator";
import LadderTable from "./LadderTable";

class LadderPreview extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<Pane>
				<Pane
					display="grid"
					gridTemplateColumns="20% 70% "
					alignItems="center"
				>
					<img
						name={this.props.league}
						src={Translator.rankToIcon(this.props.league)}
						style={{ width: 90, height: 100 }}
						alt="league_image"
					/>
					<Pane display="flex" justifyContent="space-around">
						<Text>
							Ladder Name <br />
							<Strong>{this.props.ladderName}</Strong>
						</Text>
						<Text>
							Ladder Id <br />
							<Strong>{this.props.ladderId}</Strong>
						</Text>
						<Text>
							Rank <br />
							<Strong>{this.props.rank}</Strong>
						</Text>
						<Text>
							Mode
							<br />
							<Strong>
								{data.currentLadderMembership.localizedGameMode}
							</Strong>
						</Text>
					</Pane>
					<LadderTable {...data} />
				</Pane>
			</Pane>
		);
	}
}

export default LadderPreview;

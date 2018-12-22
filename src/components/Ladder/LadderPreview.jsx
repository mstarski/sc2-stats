import React, { Component } from "react";
import { Pane, Strong, Heading, Text } from "evergreen-ui";
import Translator from "../../utilities/Translator";
import axios from "../../utilities/custom-axios";

class LadderPreview extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const token = localStorage.getItem("token");
	}
	render() {
		return (
			<Pane>
				<Pane
					display="grid"
					gridTemplateColumns="20% 35% 45%"
					alignItems="center"
				>
					<img
						name={this.props.league}
						src={Translator.rankToIcon(this.props.league)}
						style={{ width: 90, height: 100 }}
						alt="league_image"
					/>
					<Pane display="flex">
						<Text>
							Ladder Name <Strong>{this.props.ladderName}</Strong>
						</Text>
						<Text>
							Ladder Id <Strong>{this.props.ladderId}</Strong>
						</Text>
						<Text>
							Rank <Strong>{this.props.rank}</Strong>
						</Text>
					</Pane>
				</Pane>
			</Pane>
		);
	}
}

export default LadderPreview;

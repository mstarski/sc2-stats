import React from "react";
import { Pane, Heading } from "evergreen-ui";
import LadderNotFound from "../../dumb-components/Ladder/LadderNotFound/LadderNotFound";
import LadderTablist from "../../dumb-components/Ladder/LadderTab/LadderTablist";
import LadderPanel from "../../dumb-components/Ladder/LadderTab/LadderPanel";

class Ladder extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			isGrandmaster: false,
		};
	}

	render() {
		const { currentSeason } = this.props.data;

		return (
			<React.Fragment>
				{currentSeason.length === 0 ? (
					<LadderNotFound />
				) : (
					<Pane>
						<Pane>
							<Heading is={"h2"} size={800} padding={"1rem"}>
								Ladder
							</Heading>
						</Pane>
						<Pane display="flex" height={"80vh"} padding={"1rem"}>
							<LadderTablist
								currentSeason={currentSeason}
								context={this}
							/>
							<LadderPanel
								currentSeason={currentSeason}
								context={this}
							/>
						</Pane>
					</Pane>
				)}
			</React.Fragment>
		);
	}
}
export default Ladder;

import React from "react";
import { Pane, Heading, Dialog } from "evergreen-ui";
import LadderNotFound from "../../dumb-components/Ladder/LadderNotFound/LadderNotFound";
import LadderTablist from "../../dumb-components/Ladder/LadderTab/LadderTablist";
import LadderPanel from "../../dumb-components/Ladder/LadderTab/LadderPanel";

class Ladder extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			isGrandmaster: false,
			dialogIsShown: false,
			highlightedPlayerData: {},
		};

		this.highlightPlayer = this.highlightPlayer.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
	}

	highlightPlayer(playerData) {
		this.setState({
			dialogIsShown: true,
			highlightedPlayerData: playerData,
		});
	}

	closeDialog() {
		this.setState({ dialogIsShown: false });
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if()
	// }

	render() {
		const { currentSeason, highlightPlayer } = this.props.data;
		const { dialogIsShown, highlightedPlayerData } = this.state;

		return (
			<React.Fragment>
				<Dialog
					isShown={dialogIsShown}
					onCloseComplete={this.closeDialog}
					hasHeader={false}
					hasFooter={false}
				>
					<h1>Test</h1>
				</Dialog>
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
								highlightPlayer={this.highlightPlayer}
							/>
						</Pane>
					</Pane>
				)}
			</React.Fragment>
		);
	}
}
export default Ladder;

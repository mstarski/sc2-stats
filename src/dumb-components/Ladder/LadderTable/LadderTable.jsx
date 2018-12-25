import React from "react";
import { Table, Avatar, Dialog } from "evergreen-ui";
import raceLogos from "../../../utilities/raceLogos";

class LadderTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogIsShown: false,
			highlightedPlayerData: {},
		};
		this.highlightPlayer = this.highlightPlayer.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
	}

	highlightPlayer(playerData) {
		this.setState({ dialogIsShown: true, highlightPlayerData: playerData });
	}

	closeDialog() {
		this.setState({ dialogIsShown: false });
	}

	render() {
		return (
			<React.Fragment>
				<Dialog
					isShown={this.state.dialogIsShown}
					hasFooter={false}
					hasHeader={false}
					onCloseComplete={this.closeDialog}
				>
					<h1>test</h1>
				</Dialog>
				<Table
					width="100%"
					gridColumn="1/4"
					justifySelf="center"
					marginTop="2rem"
				>
					<Table.Head>
						<Table.HeaderCell>No.</Table.HeaderCell>
						<Table.HeaderCell />
						<Table.HeaderCell>Player</Table.HeaderCell>
						<Table.HeaderCell>Points</Table.HeaderCell>
						<Table.HeaderCell>MMR</Table.HeaderCell>
						<Table.HeaderCell>Wins</Table.HeaderCell>
						<Table.HeaderCell>Losses</Table.HeaderCell>
					</Table.Head>
					<Table.Body>
						{this.props.ladderTeams.map((player, index) => {
							const favRace = player.teamMembers[0].favoriteRace;
							return (
								<Table.Row
									key={index}
									isSelectable
									onSelect={() =>
										this.highlightPlayer(player)
									}
								>
									<Table.TextCell>{index + 1}</Table.TextCell>
									<Table.TextCell>
										{favRace === "random" ? (
											<Avatar size={30} name="R" />
										) : (
											<img
												style={{
													width:
														raceLogos[favRace]
															.size[0] * 0.5,
													height:
														raceLogos[favRace]
															.size[1] * 0.5,
												}}
												src={raceLogos[favRace].logo}
												alt={
													player.teamMembers[0]
														.favoriteRace
												}
											/>
										)}
									</Table.TextCell>
									<Table.TextCell>
										{player.teamMembers[0].displayName}
									</Table.TextCell>
									<Table.TextCell>
										{player.points}
									</Table.TextCell>
									<Table.TextCell>
										{player.mmr}
									</Table.TextCell>
									<Table.TextCell>
										{player.wins}
									</Table.TextCell>
									<Table.TextCell>
										{player.losses}
									</Table.TextCell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</React.Fragment>
		);
	}
}

export default LadderTable;

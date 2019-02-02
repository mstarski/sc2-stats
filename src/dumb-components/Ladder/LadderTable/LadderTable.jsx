import React from "react";
import { Table } from "evergreen-ui";
import PlayerCell from "../PlayerCell/PlayerCell";
import { withRouter } from "react-router-dom";

class LadderTable extends React.PureComponent {
	constructor(props) {
		super(props);
		this.showPlayerStats = this.showPlayerStats.bind(this);
	}

	showPlayerStats(player) {
		const regionId = localStorage.getItem("regionId"),
			realmId = localStorage.getItem("realmId"),
			playerId = player.teamMembers[0].id;
		this.props.history.push(
			`/dashboard/${regionId}/${realmId}/${playerId}`
		);
	}

	render() {
		const { tabIndex, selfIndex } = this.props;
		return (
			<React.Fragment>
				{tabIndex === selfIndex ? (
					<React.Fragment>
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
									const favRace =
										player.teamMembers[0].favoriteRace;
									return (
										<Table.Row
											key={index}
											isSelectable
											onSelect={() =>
												this.showPlayerStats(player)
											}
										>
											<Table.TextCell>
												{index + 1}
											</Table.TextCell>
											<PlayerCell favRace={favRace} />
											<Table.TextCell>
												{
													player.teamMembers[0]
														.displayName
												}
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
				) : null}
			</React.Fragment>
		);
	}
}

export default withRouter(LadderTable);

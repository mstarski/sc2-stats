import React from "react";
import { Table, Avatar } from "evergreen-ui";
import raceLogos from "../../../utilities/raceLogos";

function LadderTable(props) {
	console.log(props);
	return (
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
				{props.ladderTeams.map((player, index) => {
					const favRace = player.teamMembers[0].favoriteRace;
					return (
						<Table.Row
							key={index}
							isSelectable
							onSelect={() =>
								props.highlightPlayer(player.teamMembers[0])
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
												raceLogos[favRace].size[0] *
												0.5,
											height:
												raceLogos[favRace].size[1] *
												0.5,
										}}
										src={raceLogos[favRace].logo}
										alt={player.teamMembers[0].favoriteRace}
									/>
								)}
							</Table.TextCell>
							<Table.TextCell>
								{player.teamMembers[0].displayName}
							</Table.TextCell>
							<Table.TextCell>{player.points}</Table.TextCell>
							<Table.TextCell>{player.mmr}</Table.TextCell>
							<Table.TextCell>{player.wins}</Table.TextCell>
							<Table.TextCell>{player.losses}</Table.TextCell>
						</Table.Row>
					);
				})}
			</Table.Body>
		</Table>
	);
}

export default LadderTable;

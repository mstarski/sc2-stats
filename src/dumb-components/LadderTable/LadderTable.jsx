import React, { Component } from "react";
import { Table, Pane } from "evergreen-ui";

function LadderTable(props) {
	console.log(props);
	const currentRank = props.ranksAndPools[0].rank;
	return (
		<Table
			width="100%"
			gridColumn="1/4"
			justifySelf="center"
			marginTop="2rem"
		>
			<Table.Head>
				<Table.HeaderCell>Player</Table.HeaderCell>
				<Table.HeaderCell>Points</Table.HeaderCell>
				<Table.HeaderCell>MMR</Table.HeaderCell>
				<Table.HeaderCell>Wins</Table.HeaderCell>
				<Table.HeaderCell>Losses</Table.HeaderCell>
				<Table.HeaderCell>Joined</Table.HeaderCell>
			</Table.Head>
			<Table.Body>
				{props.ladderTeams.map((player, index) => {
					const joinDate = new Date(player.joinTimestamp * 1000);
					const day = joinDate.getDate();
					const month = joinDate.getMonth();
					const year = joinDate.getFullYear();

					return (
						<Table.Row
							key={index}
							isSelectable
							onSelect={() => alert("Selected")}
						>
							<Table.TextCell>
								{player.teamMembers[0].displayName}
							</Table.TextCell>
							<Table.TextCell>{player.points}</Table.TextCell>
							<Table.TextCell>{player.mmr}</Table.TextCell>
							<Table.TextCell>{player.wins}</Table.TextCell>
							<Table.TextCell>{player.losses}</Table.TextCell>
							<Table.TextCell>{`${joinDate}`}</Table.TextCell>
						</Table.Row>
					);
				})}
			</Table.Body>
		</Table>
	);
}

export default LadderTable;

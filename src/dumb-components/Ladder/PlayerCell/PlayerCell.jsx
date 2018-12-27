import React from "react";
import { Table, Avatar } from "evergreen-ui";
import raceLogos from "../../../utilities/raceLogos";

function PlayerCell(props) {
	const { favRace } = props;
	return (
		<Table.TextCell>
			{!["zerg", "terran", "protoss"].includes(favRace) ? (
				<Avatar size={30} name="R" />
			) : (
				<img
					style={{
						width: raceLogos[favRace].size[0] * 0.5,
						height: raceLogos[favRace].size[1] * 0.5,
					}}
					src={raceLogos[favRace].logo}
					alt={favRace}
				/>
			)}
		</Table.TextCell>
	);
}

export default PlayerCell;

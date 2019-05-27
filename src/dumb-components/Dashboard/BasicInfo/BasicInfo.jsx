import React from "react";
import { Pane, Heading, Text, Avatar } from "evergreen-ui";
import raceLogos from "../../../utilities/raceLogos";
import global from "../../../utilities/globalVariables";

function BasicInfo(props) {
	return (
		<Pane marginLeft={30} marginTop={20}>
			<Heading is={"h2"} size={900}>
				{props.favRace ? (
					<img
						style={props.raceIconStyle(props.favRace)}
						src={raceLogos[props.favRace].logo}
						alt="race_logo"
					/>
				) : (
					<Avatar
						size={50}
						style={props.raceIconStyle(props.favRace)}
					/>
				)}

				{props.displayName}
			</Heading>
			<Text size={300} marginLeft="4rem">
				{props.flag === "1" ? global().battletag : null}
			</Text>
			<Heading is={"h3"} marginTop={20}>
				Best 1v1 Rank
			</Heading>
			{props.displayProperBestRankIcon("1v1")}
			<Heading is={"h3"} marginTop={20}>
				Best Team Rank
			</Heading>
			{props.displayProperBestRankIcon("team")}
		</Pane>
	);
}

export default BasicInfo;

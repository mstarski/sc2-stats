import React from "react";
import { Pane, Heading, Text, Avatar } from "evergreen-ui";
import raceLogos from "../../utilities/raceLogos";

function BasicInfo(props) {
	const { data } = props;

	return (
		<Pane marginLeft={30} marginTop={20}>
			<Heading is={"h2"} size={900}>
				{localStorage.getItem("main_race") !== "null" ? (
					<img
						style={props.raceIconStyle()}
						src={raceLogos[localStorage.getItem("main_race")].logo}
						alt="race_logo"
					/>
				) : (
					<Avatar size={50} style={props.raceIconStyle()} />
				)}

				{props.displayName}
			</Heading>
			<Text size={300} marginLeft="4rem">
				{localStorage.getItem("battletag")}
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

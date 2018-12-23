import React from "react";
import { Pane, Text, Avatar, Badge } from "evergreen-ui";
import Translator from "../../utilities/Translator";

function AccountThumbnail(props) {
	const { profile_name, avatar, region } = props;

	return (
		<Pane
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexFlow="column"
			elevation={4}
			width={"20vw"}
			height={"20vw"}
			background="tint1"
			marginLeft={20}
			cursor="pointer"
			className="thumbnail"
			onClick={props.onClick}
		>
			<Avatar
				src={avatar}
				name={profile_name}
				size={150}
				marginBottom={10}
			/>
			<Text>{profile_name}</Text>
			<Badge color={Translator.regionToColor(region)}>{region}</Badge>
		</Pane>
	);
}

export default AccountThumbnail;

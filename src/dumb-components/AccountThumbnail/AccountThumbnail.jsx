const React = require("react");
const { Pane, Text, Avatar, Badge } = require("evergreen-ui");
const Translator = require("../../utilities/Translator");

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

module.exports = AccountThumbnail;

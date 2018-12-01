const React = require("react");
const {
	Heading,
	Text,
	Pane,
	UnorderedList,
	ListItem,
	Strong,
} = require("evergreen-ui");

function Levels(props) {
	const { zerg, protoss, terran, level } = props.data;

	return (
		<Pane margin="auto">
			<Heading size={800} is={"h4"}>
				Swarm Level
			</Heading>
			<Text size={600}>{level}</Text>

			<UnorderedList
				marginLeft={0}
				listStyle="none"
				marginTop={20}
				size={600}
			>
				<Heading size={500}>Race Distribution</Heading>
				<ListItem color="#BF0E08">
					Zerg:
					<Strong marginLeft={10} size={600}>
						{zerg.level}
					</Strong>
				</ListItem>
				<ListItem color="#007489">
					Terran:
					<Strong marginLeft={10} size={600}>
						{terran.level}
					</Strong>
				</ListItem>
				<ListItem color="#00783E">
					Protoss:
					<Strong marginLeft={10} size={600}>
						{protoss.level}
					</Strong>
				</ListItem>
			</UnorderedList>
		</Pane>
	);
}

module.exports = Levels;

const React = require("react");
const { Pane, Heading } = require("evergreen-ui");

function AchievementShowcase(props) {
	const { showcaseData, ImgOnClick } = props;

	return (
		<React.Fragment>
			<Heading is={"h1"} size={800}>
				Achievements
			</Heading>
			<Pane
				display="grid"
				gridTemplateColumns="repeat(5, 1fr)"
				marginTop="1rem"
				justifyItems="center"
			>
				{showcaseData.map(achievement => (
					<img
						onClick={() =>
							ImgOnClick({ ...achievement, earned: true })
						}
						className="achievement_icon achievement_showcase_icon"
						key={achievement.id}
						src={achievement.imageUrl}
						alt={`achievement #${achievement.id}`}
					/>
				))}
			</Pane>
		</React.Fragment>
	);
}

module.exports = AchievementShowcase;

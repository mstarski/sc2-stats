const React = require("react");
const { readFile } = window.require("fs");
const { Pane, Heading } = require("evergreen-ui");
const AchievementShowcase = require("./AchivementShowcase");
const Loader = require("../../dumb-components/Loader/Loader");

class Achievements extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			showcaseData: [],
			db: [],
			loading: false,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		const { achievementShowcase, earnedAchievements } = this.props.data;
		//Read the static files' database
		readFile("./assets/sc2-static-data.json", (err, data) => {
			if (err) throw new Error(err);
			const db = JSON.parse(data);

			//Find data about showcase achievements and extract it
			const showcaseData = db.achievements.filter(achievement => {
				return achievementShowcase.includes(achievement.id);
			});
			//Modify the db by adding info about user earning it or not
			const dbExtended = db.achievements.map(achievement => {
				const isEarned = earnedAchievements.some(earned => {
					return earned.achievementId === achievement.id;
				});
				return { ...achievement, earned: isEarned };
			});
			this.setState({
				showcaseData,
				db: dbExtended,
				loading: false,
			});
		});
	}

	render() {
		const { showcaseData, loading, db } = this.state;

		return (
			<React.Fragment>
				{loading ? (
					<Loader />
				) : (
					<div className="achievements">
						<AchievementShowcase showcaseData={showcaseData} />
						<Pane
							display="grid"
							gridTemplateColumns="repeat(8, 1fr)"
							gridGap="10px"
							width="100vw"
							marginX="auto"
							marginTop="3rem"
							justifyItems="center"
							padding="1rem"
						>
							{db.map(achievement => {
								return (
									<img
										className={[
											achievement.earned
												? "achievement_earned"
												: "achievement_not_earned",
											"achievement_icon",
										].join(" ")}
										key={achievement.id}
										src={achievement.imageUrl}
										alt={`achievement #${achievement.id}`}
									/>
								);
							})}
						</Pane>
					</div>
				)}
			</React.Fragment>
		);
	}
}

module.exports = Achievements;

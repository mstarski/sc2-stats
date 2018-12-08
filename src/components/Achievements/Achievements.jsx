const React = require("react");

class Achievements extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const { achievementShowcase, earnedAchievements } = this.props.data;
		return <h1>Achievements</h1>;
	}
}

module.exports = Achievements;

const React = require("react");

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return <h1>Dashboard</h1>;
	}
}

module.exports = Dashboard;

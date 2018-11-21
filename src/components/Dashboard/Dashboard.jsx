//Packages
const React = require("react");
const { Pane, Text, Heading } = require("evergreen-ui");

//Components
const MenuIcon = require("../../dumb-components/MenuIcon/MenuIcon");

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data, error, loading } = this.props;
		console.log(this.props);
		return (
			<Pane
				width="100vw"
				height="8vh"
				display="flex"
				alignItems="center"
				padding={10}
				justifyContent="space-between"
			>
				<Heading is={"h1"} size={800}>
					SC II Stats
				</Heading>
				<MenuIcon />
			</Pane>
		);
	}
}

module.exports = Dashboard;

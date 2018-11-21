//Packages
const React = require("react");
const { Pane, Text, Heading, Avatar } = require("evergreen-ui");

//Components
const MenuIcon = require("../../dumb-components/MenuIcon/MenuIcon");
const Loader = require("../../dumb-components/Loader/Loader");

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<div>
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
				<React.Fragment>
					<Pane width={"100vw"} marginTop={50} padding={20} key={1}>
						<Avatar
							src={data.summary.portrait}
							alt="profile_portrait"
							name={data.summary.displayName}
							size={100}
							marginLeft={50}
						/>
					</Pane>
					<Pane display="grid" width={"100vw"} height={"62.2vh"}>
						<Pane paddingLeft={85}>
							<Heading is={"h2"} size={600}>
								{data.summary.displayName}
							</Heading>
						</Pane>
					</Pane>
				</React.Fragment>
			</div>
		);
	}
}

module.exports = Dashboard;

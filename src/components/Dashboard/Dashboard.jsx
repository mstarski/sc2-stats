//Packages
const React = require("react");
const { Pane, Text, Heading, Avatar } = require("evergreen-ui");
const compare = require("../../utilities/compareFunction");

//Components
const MenuIcon = require("../../dumb-components/MenuIcon/MenuIcon");
const raceLogos = require("../../utilities/raceLogos");

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.raceIconStyle = this.raceIconStyle.bind(this);
	}

	componentDidMount() {
		this.setSeasonsMainRace(this.props.data.career);
	}

	setSeasonsMainRace(career_data) {
		const wins = {
			zerg: career_data.zergWins,
			terran: career_data.terranWins,
			protoss: career_data.protossWins,
			null: 0,
		};
		let result = null;
		Object.keys(wins).forEach(race => {
			if (wins[race] > wins[result] && wins[race] !== 0) {
				result = race;
			}
		});
		localStorage.setItem("main_race", result);
		return result;
	}

	raceIconStyle() {
		const race = localStorage.getItem("main_race");
		return {
			width: raceLogos[race].size[0],
			height: raceLogos[race].size[1],
			marginRight: "20px",
		};
	}

	render() {
		const { data } = this.props;
		console.log(data);
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
						<Pane marginLeft={60}>
							<Heading is={"h2"} size={900}>
								{localStorage.getItem("main_race") !==
								"null" ? (
									<img
										style={this.raceIconStyle()}
										src={
											raceLogos[
												localStorage.getItem(
													"main_race"
												)
											].logo
										}
										alt="race_logo"
									/>
								) : (
									<Avatar
										size={50}
										style={this.raceIconStyle()}
									/>
								)}

								{data.summary.displayName}
							</Heading>
							<Text size={300} marginLeft="4rem">
								{localStorage.getItem("battletag")}
							</Text>
						</Pane>
					</Pane>
				</React.Fragment>
			</div>
		);
	}
}

module.exports = Dashboard;

//Packages
const React = require("react");
const { Pane, Text, Heading, Avatar } = require("evergreen-ui");

//Components
const raceLogos = require("../../utilities/raceLogos");
const Header = require("../../dumb-components/Header/Header");
const LeagueIcon = require("../../../assets/diamond_league.png");
const CampaignHighlight = require("../../dumb-components/CampaignHighlight/CampaignHighlight");
const CurrentSeasonHighlight = require("../../dumb-components/CurrentSeasonHighlight/CurrentSeasonHighlight");

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			campaignSlide: 0,
		};
		this.raceIconStyle = this.raceIconStyle.bind(this);
		this.changeCampaignSlide = this.changeCampaignSlide.bind(this);
	}

	componentDidMount() {
		this.setSeasonsMainRace(this.props.data.career);
	}

	changeCampaignSlide(direction) {
		this.setState(state => ({
			campaignSlide:
				state.campaignSlide - (direction === "backward" ? 1 : -1),
		}));
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
				<Header />
				<React.Fragment>
					<Pane
						display="grid"
						gridTemplateColumns="29.5% 70.5%"
						width={"100vw"}
						marginTop={50}
						padding={20}
						key={1}
					>
						<Avatar
							src={data.summary.portrait}
							alt="profile_portrait"
							name={data.summary.displayName}
							size={100}
							marginLeft={50}
						/>
						<CampaignHighlight
							data={data.campaign}
							slide={this.state.campaignSlide}
							changeSlide={this.changeCampaignSlide}
						/>
					</Pane>
					<Pane
						display="grid"
						gridTemplateColumns="30% 70%"
						width={"100vw"}
						height={"62.2vh"}
					>
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
							<Heading is={"h3"} marginTop={20}>
								Best 1v1 Rank
							</Heading>
							<img
								style={{ margin: "10px" }}
								width={90}
								height={100}
								src={LeagueIcon}
								alt="player_league"
							/>
							<Heading is={"h3"} marginTop={20}>
								Best Team Rank
							</Heading>
							<img
								style={{ margin: "10px" }}
								width={90}
								height={100}
								src={LeagueIcon}
								alt="player_league"
							/>
						</Pane>
						<CurrentSeasonHighlight />
					</Pane>
				</React.Fragment>
			</div>
		);
	}
}

module.exports = Dashboard;

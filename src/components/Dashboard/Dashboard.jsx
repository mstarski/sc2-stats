//Packages
const React = require("react");
const { Pane, Text, Heading, Avatar } = require("evergreen-ui");

//Components
const raceLogos = require("../../utilities/raceLogos");
const Header = require("../../dumb-components/Header/Header");
const CampaignHighlight = require("../../dumb-components/CampaignHighlight/CampaignHighlight");
const CurrentSeasonHighlight = require("../../dumb-components/CurrentSeasonHighlight/CurrentSeasonHighlight");
const Translator = require("../../utilities/Translator");

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			campaignSlider: 0,
		};
		this.raceIconStyle = this.raceIconStyle.bind(this);
		this.changeCampaignSlide = this.changeCampaignSlide.bind(this);
		this.displayProperBestRankIcon = this.displayProperBestRankIcon.bind(
			this
		);
	}

	componentDidMount() {
		this.setSeasonsMainRace(this.props.data.career);
	}

	changeCampaignSlide(direction) {
		this.setState(state => ({
			campaignSlider:
				(state.campaignSlider + (direction === "backward" ? -1 : 1)) %
				3,
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

	displayProperBestRankIcon(type) {
		const best1v1Rank = this.props.data.career.best1v1Finish.leagueName;
		const bestTeamRank = this.props.data.career.bestTeamFinish.leagueName;
		const unrankedIcon = <Avatar size={90} margin={10} />;

		if (type === "1v1") {
			return best1v1Rank ? (
				<img
					style={{ width: "100px", height: "110px", margin: "10px" }}
					src={Translator.rankToIcon(best1v1Rank)}
					alt="Best 1v1 Rank"
				/>
			) : (
				unrankedIcon
			);
		} else {
			return bestTeamRank ? (
				<img
					style={{ width: "100px", height: "110px", margin: "10px" }}
					src={Translator.rankToIcon(bestTeamRank)}
					alt="Best Team Rank"
				/>
			) : (
				unrankedIcon
			);
		}
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
							slide={this.state.campaignSlider}
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
							{this.displayProperBestRankIcon("1v1")}
							<Heading is={"h3"} marginTop={20}>
								Best Team Rank
							</Heading>
							{this.displayProperBestRankIcon("team")}
						</Pane>
						<CurrentSeasonHighlight
							career={this.props.data.career}
							swarmLevels={this.props.data.swarmLevels}
						/>
					</Pane>
				</React.Fragment>
			</div>
		);
	}
}

module.exports = Dashboard;

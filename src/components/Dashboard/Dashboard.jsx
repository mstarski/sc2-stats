//Packages
const React = require("react");
const { Pane, Text, Heading, Avatar } = require("evergreen-ui");

//Components
const raceLogos = require("../../utilities/raceLogos");
const CampaignHighlight = require("../../dumb-components/CampaignHighlight/CampaignHighlight");
const CurrentSeasonHighlight = require("../../dumb-components/CurrentSeasonHighlight/CurrentSeasonHighlight");
const Translator = require("../../utilities/Translator");
const BasicInfo = require("../../dumb-components/BasicInfo/BasicInfo");

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
		this.setSeasonsMainRace(props.data.career);
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
				<React.Fragment>
					<Pane
						height="90vh"
						overflow="hidden"
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
						<Pane
							display="grid"
							gridTemplateColumns="30% 70%"
							width={"100vw"}
							height={"62.2vh"}
							marginTop={"1rem"}
						>
							<BasicInfo
								displayProperBestRankIcon={
									this.displayProperBestRankIcon
								}
								raceIconStyle={this.raceIconStyle}
								displayName={data.summary.displayName}
							/>
							<CurrentSeasonHighlight
								career={this.props.data.career}
								swarmLevels={this.props.data.swarmLevels}
							/>
						</Pane>
					</Pane>
				</React.Fragment>
			</div>
		);
	}
}

module.exports = Dashboard;

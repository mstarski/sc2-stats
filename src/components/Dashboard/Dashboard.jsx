//Packages
import React from "react";
import { Pane, Avatar } from "evergreen-ui";
import request from "../../utilities/custom-axios";

//Components
import raceLogos from "../../utilities/raceLogos";
import CampaignHighlight from "../../dumb-components/Dashboard/CampaignHighlight/CampaignHighlight";
import CurrentSeasonHighlight from "../../dumb-components/Dashboard/CurrentSeasonHighlight/CurrentSeasonHighlight";
import Translator from "../../utilities/Translator";
import BasicInfo from "../../dumb-components/Dashboard/BasicInfo/BasicInfo";
import Loader from "../../dumb-components/Loader/Loader";
import ErrorMessage from "../../dumb-components/ErrorMessage/ErrorMessage";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			campaignSlider: 0,
			loading: true,
			error: null,
			data: null,
			favRace: null,
		};
		this.raceIconStyle = this.raceIconStyle.bind(this);
		this.changeCampaignSlide = this.changeCampaignSlide.bind(this);
		this.displayProperBestRankIcon = this.displayProperBestRankIcon.bind(
			this
		);
	}

	componentDidMount() {
		const token = localStorage.getItem("token");
		const { profileId, realmId, regionId } = this.props.match.params;
		request("eu", token)
			.get(`/profile/${regionId}/${realmId}/${profileId}`)
			.then(response => {
				this.setState({ data: response.data, loading: false });
			})
			.catch(error => {
				this.setState({ error: error, loading: false });
			})
			.then(() => this.setSeasonsMainRace(this.state.data.career));
	}

	//It is required to reload when changing from other than user player's dashboard back to the user one
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.flag !== this.props.match.params.flag) {
			window.location.reload();
		}
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
		this.setState({ favRace: result });
	}

	raceIconStyle(race) {
		return {
			width: raceLogos[race].size[0],
			height: raceLogos[race].size[1],
			marginRight: "20px",
		};
	}

	displayProperBestRankIcon(type) {
		const best1v1Rank = this.state.data.career.best1v1Finish.leagueName;
		const bestTeamRank = this.state.data.career.bestTeamFinish.leagueName;
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
		const { data, error, loading } = this.state;
		return (
			<React.Fragment>
				{loading ? (
					<Loader />
				) : (
					<div>
						{error ? (
							<Pane height={"90vh"}>
								<ErrorMessage error={error.toString()} />
							</Pane>
						) : (
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
											displayName={
												data.summary.displayName
											}
											favRace={this.state.favRace}
											flag={this.props.match.params.flag}
										/>
										<CurrentSeasonHighlight
											career={this.state.data.career}
											swarmLevels={
												this.state.data.swarmLevels
											}
										/>
									</Pane>
								</Pane>
							</React.Fragment>
						)}
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default Dashboard;

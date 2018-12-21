//Packages
const React = require("react");
const { Route, Switch, Redirect, withRouter } = require("react-router-dom");
const { ipcRenderer } = window.require("electron");

//Components
const Header = require("../dumb-components/Header/Header");
const Login = require("./Login/Login");
const ChooseProfile = require("./ChooseProfile/ChooseProfile");
const DataProvider = require("../utilities/DataProvider");
const Dashboard = require("./Dashboard/Dashboard");
const Achievements = require("./Achievements/Achievements");
const Ladder = require("./Ladder/Ladder").default;

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//Set localStorage when authentiaction is complete
		ipcRenderer.on("auth-complete", (event, playerData) => {
			Object.keys(playerData).forEach(key => {
				localStorage.setItem(key, playerData[key]);
			});
			this.props.history.push("/choose-profile");
		});

		const noHeaderRoutes = ["/choose-profile", "/login"];
		const region = localStorage.getItem("region");
		const id = localStorage.getItem("id");
		const regionId = localStorage.getItem("regionId");
		const profileId = localStorage.getItem("profileId");
		const realmId = localStorage.getItem("realmId");

		return (
			<div>
				{noHeaderRoutes.includes(
					this.props.history.location.pathname
				) ? null : (
					<Header />
				)}
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/choose-profile"
						component={DataProvider(
							ChooseProfile,
							region,
							`/player/${id}`
						)}
					/>
					<Route
						exact
						path="/dashboard"
						component={DataProvider(
							Dashboard,
							region,
							`profile/${regionId}/${realmId}/${profileId}`
						)}
					/>
					<Route
						exact
						path="/achievements"
						component={DataProvider(
							Achievements,
							region,
							`profile/${regionId}/${realmId}/${profileId}`
						)}
					/>
					<Route
						path="/ladder"
						exact
						component={DataProvider(
							Ladder,
							region,
							`legacy/profile/${regionId}/${realmId}/${profileId}/ladders`
						)}
					/>
					<Redirect to="/login" />
				</Switch>
			</div>
		);
	}
}

module.exports = withRouter(App);

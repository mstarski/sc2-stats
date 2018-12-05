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
							"eu",
							`/player/${localStorage.getItem("id")}`
						)}
					/>
					<Route
						exact
						path="/dashboard"
						component={DataProvider(
							Dashboard,
							localStorage.getItem("region"),
							`profile/${localStorage.getItem(
								"regionId"
							)}/${localStorage.getItem(
								"realmId"
							)}/${localStorage.getItem("profileId")}`
						)}
					/>
					<Route
						exact
						path="/achievements"
						component={Achievements}
					/>
					<Redirect to="/login" />
				</Switch>
			</div>
		);
	}
}

module.exports = withRouter(App);

//Packages
const React = require("react");
const { Route, Switch, Redirect, withRouter } = require("react-router-dom");
const { ipcRenderer } = window.require("electron");

//Components
const Login = require("./Login/Login");
const ChooseProfile = require("./ChooseProfile/ChooseProfile");
const DataProvider = require("../utilities/DataProvider");

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

		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/choose-profile"
						render={() => (
							<DataProvider
								region="eu"
								dataSource={`/player/${localStorage.getItem(
									"id"
								)}`}
							>
								<ChooseProfile />
							</DataProvider>
						)}
					/>
					<Route exact path="/profile" />
					<Redirect to="/login" />
				</Switch>
			</React.Fragment>
		);
	}
}

module.exports = withRouter(App);

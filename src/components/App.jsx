//Packages
const React = require("react");
const { Route, Switch, Redirect, withRouter } = require("react-router-dom");
const { ipcRenderer } = window.require("electron");

//Components
const Login = require("./Login/Login");
const Dashboard = require("./Dashboard/Dashboard");
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
			this.props.history.push("/dashboard");
		});

		return (
			<React.Fragment>
				<Switch>
					<Route path="/login" component={Login} />
					<Route
						path="/dashboard"
						render={() => (
							<DataProvider>
								<Dashboard />
							</DataProvider>
						)}
					/>
					<Redirect to="/login" />
				</Switch>
			</React.Fragment>
		);
	}
}

module.exports = withRouter(App);

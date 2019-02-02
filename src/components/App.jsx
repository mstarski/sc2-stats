//Packages
import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
const { ipcRenderer } = window.require("electron");

//Components
import Header from "../dumb-components/Header/Header";
import Login from "./Login/Login";
import ChooseProfile from "./ChooseProfile/ChooseProfile";
import DataProvider from "../utilities/DataProvider";
import Dashboard from "./Dashboard/Dashboard";
import Achievements from "./Achievements/Achievements";
import Ladder from "./Ladder/Ladder";

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
			<div style={{ width: "100%" }}>
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
							`/player/${id}`
						)}
					/>
					<Route
						path="/dashboard/:regionId/:realmId/:profileId/:flag"
						component={Dashboard}
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

export default withRouter(App);

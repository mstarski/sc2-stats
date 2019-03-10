import React from "react";
import Background from "../Background/Background";
import LoginBg from "../../../assets/login-bg.jpg";
import BattlenetIcon from "../../../assets/battlenet-icon.png";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler() {
		window
			.require("electron")
			.shell.openExternal("http://localhost:3000/auth/bnet");
	}

	render() {
		return (
			<React.Fragment>
				<Background src={LoginBg} />
				<div className="login-wrapper">
					<h1 className="login-wrapper__header">
						Welcome to Starcraft II Statistics
					</h1>
					<button
						onClick={this.submitHandler}
						className="login-wrapper__button"
					>
						<img
							style={{ width: "50px" }}
							src={BattlenetIcon}
							alt="battle.net"
						/>
						<span>Log in with battle.net</span>
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;

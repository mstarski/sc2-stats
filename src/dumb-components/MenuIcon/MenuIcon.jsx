import React from "react";
import Marine from "../../../assets/marine.png";
import { Button, Pane } from "evergreen-ui";

function MenuIcon(props) {
	return (
		<Pane width="100px" height="100%" display="flex" marginRight={20}>
			<Button
				onClick={props.onClick}
				height={40}
				appearance="minimal"
				className="menu-icon"
			>
				<img className="menu-icon__marine" src={Marine} alt="Menu" />
				Menu
			</Button>
		</Pane>
	);
}

module.exports = MenuIcon;

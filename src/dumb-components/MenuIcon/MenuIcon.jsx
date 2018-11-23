const React = require("react");
const Marine = require("../../../assets/marine.png");
const { Button, Pane } = require("evergreen-ui");

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

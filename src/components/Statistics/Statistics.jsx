import React from "react";
import { withRouter } from "react-router-dom";
import { Pane, Tablist, SidebarTab, Heading } from "evergreen-ui";

class Statistics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: ["Matchups", "Match History"],
			selectedIndex: 0,
		};
		this.handleTabChange = this.handleTabChange.bind(this);
	}

	handleTabChange(index) {
		this.setState({
			selectedIndex: index,
		});
	}

	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<Heading is={"h2"} size={800} padding={"1rem"}>
					Statistics
				</Heading>
				<Pane display={"flex"}>
					<Tablist padding={"1rem"} flexBasis={240}>
						{this.state.tabs.map((tab, id) => (
							<SidebarTab
								key={tab}
								id={tab}
								onSelect={() => this.handleTabChange(id)}
								isSelected={id === this.state.selectedIndex}
							>
								{tab}
							</SidebarTab>
						))}
					</Tablist>
				</Pane>
			</React.Fragment>
		);
	}
}

export default withRouter(Statistics);

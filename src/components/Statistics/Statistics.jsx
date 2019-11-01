import React from "react";
import { withRouter } from "react-router-dom";
import { Pane, Tablist, SidebarTab, Heading } from "evergreen-ui";
import StatisticsPanel from "../Statistics/StatisticsPanel/StatisticsPanel";
import debounce from "../../utilities/debounce";

class Statistics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: ["General Info", "Graphs"],
			selectedIndex: 0,
			graphIndex: 0, //Passing down to the Graphs component
		};
		this.handleTabChange = this.handleTabChange.bind(this);
		this.handleGraphTabChange = this.handleGraphTabChange.bind(this);
	}

	// Handle Scroll event and pass it down since it does not work at the lower level

	handleTabChange(index) {
		this.setState({
			selectedIndex: index,
		});
	}

	handleGraphTabChange(event, direction) {
		this.setState(state => ({
			graphIndex: state.graphIndex + 1 * (direction === "up" ? -1 : 1),
		}));
	}

	render() {
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
					<StatisticsPanel
						graphIndex={this.state.graphIndex}
						matchHistory={this.props.data.matches}
						selectedIndex={this.state.selectedIndex}
						graphTabChange={this.handleGraphTabChange}
					/>
				</Pane>
			</React.Fragment>
		);
	}
}

export default withRouter(Statistics);

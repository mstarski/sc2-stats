import React, { Component } from "react";
import { Pane, Heading, Tablist, SidebarTab } from "evergreen-ui";
import LadderPreview from "./LadderPreview";
import LadderNotFound from "./LadderNotFound";
import DataProvider from "../../utilities/DataProvider";

const regionId = localStorage.getItem("regionId"),
	region = localStorage.getItem("region"),
	realmId = localStorage.getItem("realmId"),
	profileId = localStorage.getItem("profileId");
let ladderId;

class Ladder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
		};
	}
	render() {
		const { currentSeason, previousSeason } = this.props.data;

		return (
			<React.Fragment>
				{currentSeason.length === 0 ? (
					<LadderNotFound />
				) : (
					<Pane>
						<Pane>
							<Heading is={"h2"} size={800} padding={"1rem"}>
								Ladder
							</Heading>
						</Pane>
						<Pane display="flex" height={"80vh"} padding={"1rem"}>
							{currentSeason[0].ladder.map((ladder, index) => (
								<Tablist
									key={ladder.ladderId}
									marginBottom={16}
									flexBasis={240}
									marginRight={24}
								>
									<SidebarTab
										id={ladder.ladderId}
										onSelect={() =>
											this.setState({
												selectedIndex: index,
											})
										}
										isSelected={
											index === this.state.selectedIndex
										}
										aria-controls={`panel-${
											ladder.ladderName
										}`}
									>
										{`${ladder.ladderName} - ${
											ladder.league
										} ${ladder.matchMakingQueue}`}
									</SidebarTab>
								</Tablist>
							))}
							<Pane
								overflow="scroll"
								padding={16}
								background="tint1"
								flex="1"
							>
								{currentSeason[0].ladder.map(
									(ladder, index) => {
										const LadderView = DataProvider(
											LadderPreview,
											region,
											`profile/${regionId}/${realmId}/${profileId}
										/ladder/${ladder.ladderId}`,
											{ ...ladder }
										);
										return (
											<Pane
												key={ladder.ladderId}
												id={`panel-${
													ladder.ladderName
												}`}
												role="tabpanel"
												aria-labelledby={
													ladder.ladderName
												}
												aria-hidden={
													index !==
													this.state.selectedIndex
												}
												display={
													index ===
													this.state.selectedIndex
														? "block"
														: "none"
												}
											>
												<LadderView />
											</Pane>
										);
									}
								)}
							</Pane>
						</Pane>
					</Pane>
				)}
			</React.Fragment>
		);
	}
}
export default Ladder;

import React from "react";
import { Pane, Heading, Tablist, SidebarTab } from "evergreen-ui";
import LadderPreview from "../../dumb-components/Ladder/LadderPreview/LadderPreview";
import LadderNotFound from "../../dumb-components/Ladder/LadderNotFound/LadderNotFound";
import DataProvider from "../../utilities/DataProvider";
import GrandmasterTab from "../../dumb-components/Ladder/Grandmaster/GrandmasterTab";
import GrandmasterPanel from "../../dumb-components/Ladder/Grandmaster/GrandmasterPanel";

const regionId = localStorage.getItem("regionId"),
	region = localStorage.getItem("region"),
	realmId = localStorage.getItem("realmId"),
	profileId = localStorage.getItem("profileId");

class Ladder extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			isGrandmaster: false,
		};
	}
	render() {
		const { currentSeason, previousSeason } = this.props.data;

		const GrandMasterPanel = DataProvider(
			GrandmasterPanel,
			region,
			`ladder/grandmaster/${regionId}`,
			{ context: this, currentSeason: currentSeason }
		);

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
							<Tablist
								marginBottom={16}
								flexBasis={240}
								marginRight={24}
							>
								{currentSeason[0].ladder.map(
									(ladder, index) => (
										<SidebarTab
											key={ladder.ladderId}
											id={ladder.ladderId}
											onSelect={() =>
												this.setState({
													selectedIndex: index,
												})
											}
											isSelected={
												index ===
												this.state.selectedIndex
											}
											aria-controls={`panel-${
												ladder.ladderName
											}`}
										>
											{`${ladder.ladderName} - ${
												ladder.league
											} ${ladder.matchMakingQueue}`}
										</SidebarTab>
									)
								)}
								<GrandmasterTab
									context={this}
									currentSeason={currentSeason}
								/>
							</Tablist>
							<Pane
								overflow="scroll"
								padding={16}
								background="tint1"
								flex="1"
							>
								{currentSeason[0].ladder.map(
									(ladder, index) => {
										if (ladder.league === "GRANDMASTER")
											this.setState({
												isGrandmaster: true,
											});
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
								{this.state.isGrandmaster ? null : (
									<GrandMasterPanel />
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

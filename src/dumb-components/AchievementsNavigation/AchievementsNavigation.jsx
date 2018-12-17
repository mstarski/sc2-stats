const React = require("react");
const { Pane, SearchInput, Button } = require("evergreen-ui");
class AchievementsNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
		};
	}

	//TODO SEARCH HANDLER

	render() {
		const {
			currentPage,
			chunkSize,
			setPage,
			handlePageChange,
			dbLength,
		} = this.props;
		const pageCount = (dbLength / chunkSize) >> 0;
		return (
			<Pane
				display="flex"
				justifyContent="space-around"
				flexFlow="row-reverse"
				alignItems="center"
				marginY="2rem"
			>
				<Pane width="32%" display="flex" justifyContent="space-around">
					<Button onClick={() => handlePageChange("backward")}>
						&lt;&lt;
					</Button>
					{[1, 2, 3, 4].map((i, index) => {
						return (
							<Button
								appearance={index === 0 ? "primary" : "default"}
								onClick={() =>
									setPage((currentPage + index) % pageCount)
								}
								key={index}
							>
								{(currentPage + index) % pageCount}
							</Button>
						);
					})}
					<Button onClick={() => setPage(pageCount)}>
						{pageCount}
					</Button>
					<Button onClick={() => handlePageChange("forward")}>
						&gt;&gt;
					</Button>
				</Pane>
				<form>
					<SearchInput
						value={this.state.searchText}
						onChange={event =>
							this.setState({ searchText: event.target.value })
						}
						placeholder="Search for an achievement ..."
					/>
					<Button
						onClick={() =>
							props.handleSearch(this.state.searchText)
						}
					>
						Search
					</Button>
				</form>
			</Pane>
		);
	}
}

module.exports = AchievementsNavigation;

//Packages
const React = require("react");
const { Pane, Text, Heading } = require("evergreen-ui");
const { withRouter } = require("react-router-dom");

//Components
const AccountThumbnail = require("../../dumb-components/AccountThumbnail/AccountThumbnail.jsx");
const Translator = require("../../utilities/Translator");
const Loader = require("../../dumb-components/Loader/Loader");

class ChooseProfile extends React.Component {
	constructor(props) {
		super(props);

		this.selectionHandler = this.selectionHandler.bind(this);
	}

	selectionHandler() {
		this.props.history.push("/dashboard");
	}

	render() {
		const { data, error, loading } = this.props;

		const conditionalRender = {
			thumbnails: {
				condition: data && !error && !loading,
				component: (
					<div key={1} className="dashboard__profiles_grid">
						{(data || []).map(profile => {
							return (
								<AccountThumbnail
									onClick={this.selectionHandler}
									key={profile.profileId}
									profile_name={profile.name}
									avatar={profile.avatarUrl}
									region={Translator.idsToName(
										profile.regionId,
										profile.realmId
									)}
								/>
							);
						})}
					</div>
				),
			},
			error: {
				condition: !data && !loading && error,
				component: (
					<Pane key={2}>
						<Heading is={"h2"} size={700}>
							Oops - something went wrong !
						</Heading>
						<Text>{this.props.error}</Text>
					</Pane>
				),
			},
			loading: {
				condition: !data && !error && loading,
				component: <Loader key={3} />,
			},
		};

		console.log(data);
		return (
			<div className="dashboard">
				<Heading
					textAlign={"center"}
					marginBottom={20}
					is={"h1"}
					size={900}
					marginTop="2rem"
				>
					Choose your profile
				</Heading>
				{Object.keys(conditionalRender).map(toDisplay => {
					return conditionalRender[toDisplay].condition
						? conditionalRender[toDisplay].component
						: null;
				})}
			</div>
		);
	}
}

module.exports = withRouter(ChooseProfile);

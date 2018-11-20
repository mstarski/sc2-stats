//Packages
const React = require("react");
const { Pane, Text, Heading } = require("evergreen-ui");
const Translator = require("../../utilities/Translator");

//Components
const AccountThumbnail = require("../../dumb-components/AccountThumbnail/AccountThumbnail.jsx");

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;

		console.log(data);
		return (
			<div className="dashboard">
				<Heading
					textAlign={"center"}
					marginBottom={20}
					is={"h1"}
					size={900}
				>
					Choose your profile
				</Heading>
				<div className="dashboard__profiles_grid">
					{(data || []).map(profile => {
						return (
							<AccountThumbnail
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
			</div>
		);
	}
}

module.exports = Dashboard;

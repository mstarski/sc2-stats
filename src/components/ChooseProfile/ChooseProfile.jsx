//Packages
import React from "react";
import { Pane, Text, Heading } from "evergreen-ui";
import { withRouter } from "react-router-dom";

//Components
import AccountThumbnail from "../../dumb-components/AccountThumbnail/AccountThumbnail.jsx";
import Translator from "../../utilities/Translator";

class ChooseProfile extends React.Component {
	constructor(props) {
		super(props);

		this.selectionHandler = this.selectionHandler.bind(this);
	}

	selectionHandler(regionId, realmId, profileId) {
		const params = new Object({
			realmId,
			regionId,
			profileId,
			region: Translator.idsToName(regionId, realmId).toLowerCase(),
		});
		Object.keys(params).map(param => {
			localStorage.setItem(param, params[param]);
		});
		this.props.history.push(
			`/dashboard/${regionId}/${realmId}/${profileId}`
		);
	}

	render() {
		const { data } = this.props;
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
				<div key={1} className="dashboard__profiles_grid">
					{data.map(profile => {
						return (
							<AccountThumbnail
								onClick={() =>
									this.selectionHandler(
										profile.regionId,
										profile.realmId,
										profile.profileId
									)
								}
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

export default withRouter(ChooseProfile);

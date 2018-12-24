import React from "react";
import { Pane } from "evergreen-ui";
import LadderTable from "../LadderTable/LadderTable";
import LadderHeader from "../LadderHeader/LadderHeader";

class LadderPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<Pane>
				<Pane
					display="grid"
					gridTemplateColumns="20% 70% "
					alignItems="center"
				>
					<LadderHeader {...this.props} />
					<LadderTable {...data} />
				</Pane>
			</Pane>
		);
	}
}

export default LadderPreview;

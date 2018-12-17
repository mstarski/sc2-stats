const React = require("react");
const { Pane, Dialog } = require("evergreen-ui");

function DialogComponent(props) {
	const {
		description,
		earned,
		id,
		imageUrl,
		title,
		points,
	} = props.achievementData;
	return (
		<Pane>
			<Dialog
				alignItems="center"
				isShown={props.isShown}
				title={title}
				intent="none"
				hasFooter={false}
				onCloseComplete={props.onClose}
				confirmLabel="Delete Something"
			>
				<Pane>{description}</Pane>
			</Dialog>
		</Pane>
	);
}

module.exports = DialogComponent;

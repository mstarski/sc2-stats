import React from "react";
import { Dialog } from "evergreen-ui";

function LadderDialog(props) {
	return (
		<Dialog
			isShown={props.isShown}
			onCloseComplete={props.onClose}
			hasHeader={false}
			hasFooter={false}
		>
			<h1>aaa</h1>
		</Dialog>
	);
}

export default LadderDialog;

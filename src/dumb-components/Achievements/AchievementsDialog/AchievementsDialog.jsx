import React from "react";
import { Text, Icon, Pane, Dialog } from "evergreen-ui";

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
			>
				<Pane display="flex" flexFlow="column">
					<img
						style={{ alignSelf: "center" }}
						src={imageUrl}
						alt="Achievement Icon"
					/>
					<Text padding={10} textAlign="center">
						{description}
					</Text>
					<Pane display="flex" padding="2rem" flexFlow="column">
						<Text>Achievement id: {id}</Text>
						<Text>
							Earned:
							{earned ? (
								<Icon icon="tick" />
							) : (
								<Icon icon="cross" />
							)}
						</Text>
						<Text>Points: {points}</Text>
					</Pane>
				</Pane>
			</Dialog>
		</Pane>
	);
}

module.exports = DialogComponent;

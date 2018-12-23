import React from "react";
import { Heading, Text, Pane } from "evergreen-ui";
import Lurker from "../../../assets/Lurker.gif";

function ErrorMessage(props) {
	return (
		<Pane
			width="100%"
			height="100%"
			display="flex"
			flexFlow="column"
			justifyContent="center"
			alignItems="center"
			key={2}
		>
			<img src={Lurker} alt="Error_Image" />
			<Heading is={"h2"} size={700}>
				Oops - something went wrong !
			</Heading>
			<Text>{props.error}</Text>
		</Pane>
	);
}

export default ErrorMessage;

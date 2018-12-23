import React from "react";
import LoaderGif from "../../../assets/Loading.gif";
import { Pane } from "evergreen-ui";

function Loader(props) {
	return (
		<Pane
			display="flex"
			width="100vw"
			height="100vh"
			justifyContent="center"
			alignItems="center"
		>
			<img src={LoaderGif} alt="Loading ..." />
		</Pane>
	);
}

module.exports = Loader;

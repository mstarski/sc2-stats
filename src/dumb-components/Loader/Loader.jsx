const React = require("react");
const LoaderGif = require("../../../assets/Loading.gif");
const { Pane } = require("evergreen-ui");

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

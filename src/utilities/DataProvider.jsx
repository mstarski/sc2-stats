const React = require("react");
const requestConfig = require("../utilities/custom-axios");
const axios = require("axios");

class DataProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
		};
	}

	async componentDidMount() {
		// const { dataSource, region } = this.props;
		// const { data } = await axios(dataSource, requestConfig);
		// await this.setState({ data });
		// console.log(data);
		// return 0;
	}

	render() {
		return React.cloneElement(this.props.children, { ...this.state.data });
	}
}

module.exports = DataProvider;

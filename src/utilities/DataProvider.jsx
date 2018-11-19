const React = require("react");
const request = require("../utilities/custom-axios");

class DataProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
		};
	}

	async componentDidMount() {
		const { dataSource, region } = this.props;
		try {
			var { data } = await request(region, localStorage.getItem("token"))(
				dataSource
			);
		} catch (error) {
			throw new Error(`Failed to fetch: \n${error}`);
		}
		await this.setState({ data });
		return 0;
	}

	render() {
		return React.cloneElement(this.props.children, { ...this.state });
	}
}

module.exports = DataProvider;

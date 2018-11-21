//Packages
const React = require("react");
const request = require("../utilities/custom-axios");
const { Pane, Text, Heading } = require("evergreen-ui");

//Components
const Loader = require("../dumb-components/Loader/Loader");
const ErrorMessage = require("../dumb-components/ErrorMessage/ErrorMessage");

function DataProvider(Component, region, dataSource) {
	return class DataProviderComponent extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				data: null,
				error: null,
				loading: true,
			};
		}

		async componentDidMount() {
			await this.setState({ loading: true });
			try {
				var { data } = await request(
					region,
					localStorage.getItem("token")
				)(dataSource);
			} catch (error) {
				await this.setState({
					error: error.toString(),
					loading: false,
				});
				throw new Error(error);
			}
			await this.setState({ data, loading: false });
			return 0;
		}

		render() {
			const conditionalRender = {
				correct: {
					condition:
						this.state.data &&
						!this.state.error &&
						!this.state.loading,
					component: <Component {...this.state} key={1} />,
				},
				error: {
					condition:
						!this.state.data &&
						this.state.error &&
						!this.state.loading,
					component: <ErrorMessage error={this.state.error} />,
				},
				loading: {
					condition:
						!this.state.data &&
						!this.state.error &&
						this.state.loading,
					component: <Loader />,
				},
			};

			return Object.keys(conditionalRender).map(toRender =>
				conditionalRender[toRender].condition
					? conditionalRender[toRender].component
					: null
			);
		}
	};
}

module.exports = DataProvider;

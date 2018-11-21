//Packages
const React = require("react");
const request = require("../utilities/custom-axios");
const { Pane, Text, Heading } = require("evergreen-ui");

//Components
const Loader = require("../dumb-components/Loader/Loader");

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
				this.setState({ error: error, loading: false });
				throw new Error(`Failed to fetch: \n${error}`);
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
					component: (
						<Pane key={2}>
							<Heading is={"h2"} size={700}>
								Oops - something went wrong !
							</Heading>
							<Text>{this.state.error}</Text>
						</Pane>
					),
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

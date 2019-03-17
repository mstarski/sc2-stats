import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { Heading } from "evergreen-ui";

const MatchHistoryGraph = data => (
	<React.Fragment>
		<Heading
			textAlign="center"
			marginBottom="2rem"
			is={"h3"}
			fontSize={"2rem"}
		>
			Match History
		</Heading>
		<LineChart
			width={700}
			height={500}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<XAxis tick={false} dataKey="date" />
			<Tooltip
				formatter={(value, name, props) => [
					value === 1 ? "Win" : "Lose",
					props.payload.map,
				]}
			/>
			<Line
				type="linear"
				dataKey="result"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
		</LineChart>
	</React.Fragment>
);

export default MatchHistoryGraph;

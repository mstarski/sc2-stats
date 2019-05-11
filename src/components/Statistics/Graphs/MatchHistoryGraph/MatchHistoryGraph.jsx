import React from "react";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";
import { Heading, Pane } from "evergreen-ui";

const MatchHistoryGraph = data => (
	<Pane>
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
			<Legend />
			<XAxis tick={false} dataKey="date" />
			<Tooltip
				formatter={(value, name, props) => [
					value === 1 ? "Win" : "Lose",
					props.payload.map,
				]}
			/>
			<Line
				type="linear"
				dataKey="Result"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
		</LineChart>
	</Pane>
);

export default MatchHistoryGraph;

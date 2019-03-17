import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const WinRatioGraph = data => (
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
		<XAxis dataKey="date" />
		<Tooltip
			formatter={(value, name, props) => (value === 1 ? "Win" : "Lose")}
		/>
		<Line
			type="linear"
			dataKey="result"
			stroke="#8884d8"
			activeDot={{ r: 8 }}
		/>
	</LineChart>
);

export default WinRatioGraph;

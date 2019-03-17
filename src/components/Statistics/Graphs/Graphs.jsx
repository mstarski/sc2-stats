import React, { useEffect, useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const renderLineChart = data => (
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

function Graphs(props) {
	const [matches, setMatches] = useState([]);
	useEffect(() => {
		const { matchHistory } = props;
		const formattedMatches = matchHistory.map(match => ({
			map: match.map,
			result: match.decision === "Win" ? 1 : 0,
			date: new Date(match.date),
		}));
		setMatches(formattedMatches);
	}, []);

	return renderLineChart(matches);
}

export default Graphs;

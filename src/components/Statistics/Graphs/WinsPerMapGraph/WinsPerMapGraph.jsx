import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";
import { Heading } from "evergreen-ui";

function WinsPerMapGraph(matches) {
	const data = [];
	const matches_info = new Object();
	matches.forEach(map => {
		if (typeof matches_info[map.map] !== "number") {
			matches_info[map.map] = 0;
		}
		matches_info[map.map] += map.result;
	});
	Object.keys(matches_info).map(key => {
		data.push({ name: key, value: matches_info[key] });
	});

	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
	return (
		<div className="winsPerMapGraph">
			<Heading
				textAlign="center"
				marginBottom="2rem"
				is={"h3"}
				fontSize={"2rem"}
			>
				Wins per map
			</Heading>
			<PieChart width={400} height={400}>
				<Legend />
				<Tooltip />
				<Pie
					data={data}
					cx={"50%"}
					cy={"50%"}
					innerRadius={60}
					outerRadius={80}
					fill="#8884d8"
					paddingAngle={5}
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>
		</div>
	);
}

export default WinsPerMapGraph;

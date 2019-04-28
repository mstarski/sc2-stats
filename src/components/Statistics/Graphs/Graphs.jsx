import React, { useEffect, useState } from "react";
import MatchHistoryGraph from "./MatchHistoryGraph/MatchHistoryGraph";
import WinsPerMapGraph from "./WinsPerMapGraph/WinsPerMapGraph";

const graphs = [MatchHistoryGraph, WinsPerMapGraph];

function Graphs(props) {
	const [matches, setMatches] = useState([]); // Contains fetched info about games played
	useEffect(() => {
		const { matchHistory } = props;
		const formattedMatches = matchHistory.map(match => ({
			map: match.map,
			result: match.decision === "Win" ? 1 : 0,
			date: new Date(match.date * 1000).toDateString(),
		}));
		setMatches(formattedMatches);
	}, []);
	console.log(props.graphIndex % graphs.length);
	return (
		<div className="graphs">
			{graphs[props.graphIndex % graphs.length](matches)}
		</div>
	);
}

export default Graphs;

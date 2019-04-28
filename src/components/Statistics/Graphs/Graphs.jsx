import React, { useEffect, useState } from "react";
import MatchHistoryGraph from "./MatchHistoryGraph/MatchHistoryGraph";

const graphs = [MatchHistoryGraph];

function Graphs(props) {
	const [graphNumber, setGraphNumber] = useState(0); // Contains displayed graph's number
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
	return <div className="graphs">{graphs[graphNumber](matches)}</div>;
}

export default Graphs;

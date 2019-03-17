import React, { useEffect, useState } from "react";
import MatchHistoryGraph from "./MatchHistoryGraph/MatchHistoryGraph";

function Graphs(props) {
	const [matches, setMatches] = useState([]);
	useEffect(() => {
		const { matchHistory } = props;
		const formattedMatches = matchHistory.map(match => ({
			map: match.map,
			result: match.decision === "Win" ? 1 : 0,
			date: new Date(match.date * 1000).toDateString(),
		}));
		setMatches(formattedMatches);
	}, []);
	return <div className="graphs">{MatchHistoryGraph(matches)}</div>;
}

export default Graphs;

import React, { useEffect, useState } from "react";
import WinRatioGraph from "./WinRatioGraph/WinRatioGraph";

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
	return <div className="graphs">{WinRatioGraph(matches)}</div>;
}

export default Graphs;

//Custom axios config to be used with bnet API
import axios from "axios";

const custom = (region, token) =>
	axios.create({
		baseURL: `https://${region}.api.blizzard.com/sc2`,
		headers: { Authorization: `Bearer ${token}` },
	});

export default custom;

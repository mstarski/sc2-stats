//Custom axios config to be used with bnet API
const axios = require("axios");

const custom = (region, token) =>
	axios.create({
		baseURL: `https://${region}.api.blizzard.com/sc2`,
		headers: { Authorization: `Bearer ${token}` },
	});

module.exports = custom;

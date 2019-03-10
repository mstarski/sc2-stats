const app = require("express")();
const passport = require("passport");
const BnetStrategy = require("passport-bnet").Strategy;
const http = require("http");
const config = require("./local/config");



const port = 3000;
const BNET_ID = config.BNET_ID;
const BNET_SECRET = config.BNET_SECRET;
const region = "eu";
let user = null;

app.use(passport.initialize());

// Use the BnetStrategy within Passport.
passport.use(
	new BnetStrategy(
		{
			clientID: BNET_ID,
			clientSecret: BNET_SECRET,
			callbackURL: `http://localhost:${port}/auth/bnet/callback`,
			region: region,
		},
		function(accessToken, refreshToken, profile, done) {
			user = profile;
			return done(null, profile);
		}
	)
);

app.get("/", (req, res) => {
	if (!user) {
		res.json({
			user: "none",
		});
	} else {
		res.json({
			...user,
		});
	}
});

app.get("/auth/bnet", passport.authenticate("bnet"));

app.get(
	"/auth/bnet/callback",
	passport.authenticate("bnet", {
		failureRedirect: "/?successful=false",
		session: false,
	}),
	function(req, res) {
		console.log(res.req.user);
		res.redirect("/?successful=true");
	}
);

http.createServer(app).listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});

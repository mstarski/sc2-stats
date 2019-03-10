const app = require("express")();
const passport = require("passport");
const BnetStrategy = require("passport-bnet").Strategy;
const http = require("http");
const config = require("./local/config");
const jwt = require("jsonwebtoken");
const net = require("net");

const port = 3000;
const { BNET_ID, BNET_SECRET, JWT_SECRET } = config;
const region = "eu";

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
			return done(null, profile);
		}
	)
);

app.get("/", (req, res) => {
	const auth_result = req.query.successful.toString();
	if (auth_result) {
		res.send("You can now close this window");
	} else {
		res.send("Whoops, something went wrong");
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
		const user_code = jwt.sign(res.req.user, JWT_SECRET);
		const TCPSocket = net.Socket();
		TCPSocket.connect(31337, "127.0.0.1", function() {
			console.log("Connected to the client, here's your code: ");
			TCPSocket.write(user_code);
			TCPSocket.destroy();
		});
		TCPSocket.on("close", () =>
			console.log("Authenticator socket closed.")
		);
		res.redirect("/?successful=true");
	}
);

http.createServer(app).listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});

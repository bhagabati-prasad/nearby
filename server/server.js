const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconn");
// require routes
const loginRoute = require("./routes/loginRoutes");
const signupRoute = require("./routes/signupRoutes");
const logoutRoute = require("./routes/logoutRoutes");

// load env vars
dotenv.config();

// enable cors
const corsOptions = {
  origin: [process.env.CORS_ORIGIN],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));

// connect to database
connectDB();

// use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routing
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.use("/api/login", loginRoute);
app.use("/api/signup", signupRoute);
app.use("/api/logout", logoutRoute);
// app.use("/api/rent");
app.get("*", (req, res) => {
  res.send("Nothing is here!");
});
// starting server on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));

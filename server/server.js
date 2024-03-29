const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconn");
// require routes
const loginRoutes = require("./routes/loginRoutes");
const signupRoutes = require("./routes/signupRoutes");
const logoutRoutes = require("./routes/logoutRoutes");
const postAdRoutes = require("./routes/postAdRoutes");
const Navmenu = require("./models/Navmenu");
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");

// load env vars
dotenv.config();

// enable cors
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));

// connect to database
connectDB();

// use middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

// routing
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.use("/api/login", loginRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postAdRoutes);
app.use("/api/items", itemRoutes);

app.get("/api/navmenu", async (req, res) => {
  const navmenu = await Navmenu.find();
  res.send(navmenu);
});

app.get("*", (req, res) => {
  res.send("Nothing is here!");
});
// starting server on port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}...`));

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
const User = require("./models/User");
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routing
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.use("/api/login", loginRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/post", postAdRoutes);

app.get("/api/navmenu", async (req, res) => {
  const navmenu = await Navmenu.find();
  res.json(navmenu);
});

// app.delete("/api/delete", auth, async (req, res) => {
//   try {
//     const deleteUser = await User.findOneAndDelete(req.userId);
//     res.send(deleteUser);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.get("*", (req, res) => {
  res.send("Nothing is here!");
});
// starting server on port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}...`));

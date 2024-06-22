// load env vars
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbconn');
// require routes
const loginRoutes = require('./routes/loginRoutes');
const signupRoutes = require('./routes/signupRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const postAdRoutes = require('./routes/postAdRoutes');
const Navmenu = require('./models/Navmenu');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');

// enable cors
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));

// connect to database
connectDB();

// use middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

// routing
app.get('/', (req, res) => {
  res.send('Welcome to home page');
});
app.use('/api/login', loginRoutes);
app.use('/api/signup', signupRoutes);
app.use('/api/logout', logoutRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postAdRoutes);
app.use('/api/items', itemRoutes);

const User = require('./models/User');
const Item = require('./models/Item');
app.patch('/api/fav/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    let favourites = [];
    if (user.favourites.some((fav) => fav.title === req.body.title)) {
      favourites = user.favourites.filter(
        (fav) => fav.title !== req.body.title
      );
    } else {
      favourites = [{ ...req.body }, ...user.favourites];
    }
    const userRes = await User.findByIdAndUpdate(
      userId,
      {
        favourites,
      },
      { new: true }
    );
    // console.log(userRes);
    res.json({
      isLoggedIn: true,
      user: userRes,
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

app.get('/api/sold/:userId/:itemId', async (req, res) => {
  try {
    const { userId, itemId } = req.params;
    const getItem = await Item.findOne({ userId, _id: itemId });
    console.log(getItem);
    const newItems = await Item.findByIdAndUpdate(
      itemId,
      {
        sold: !getItem.sold,
      },
      { new: true }
    );
    res.json({ status: true, items: newItems });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

app.get('/api/navmenu', async (req, res) => {
  // const navmenu = await Navmenu.find();
  const navmenu = [
    { _id: 1, menu: 'menu1' },
    { _id: 2, menu: 'menu2' },
    { _id: 3, menu: 'menu3' },
  ];
  res.send(navmenu);
});

app.get('*', (req, res) => {
  res.send('Nothing is here!');
});
// starting server on port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}...`));

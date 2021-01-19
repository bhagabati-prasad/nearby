const mongoose = require("mongoose");

const navMenuSchema = mongoose.Schema({
  menu: {
    type: String,
  },
  submenu: [
    {
      title: {
        type: String,
      },
    },
  ],
});

const Navmenu = mongoose.model("navmenus", navMenuSchema);
module.exports = Navmenu;

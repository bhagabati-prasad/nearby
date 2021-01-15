const mongoose = require("mongoose");

// create Items schema
const itemSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Details are required"],
  },
  price: {
    type: String,
  },
  address: {
    house: {
      type: String,
    },
    street: {
      type: String,
    },
    area: {
      type: String,
      required: [true, "Area is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    pincode: {
      type: String,
      required: [true, "Pincode is required"],
    },
    country: {
      type: String,
      required: [true, "Country name is required"],
    },
  },
  userInfo: {
    name: {
      type: String,
      // required: [true, "Name is required"],
    },
    phone: {
      type: Number,
      // required: [true, "Phone number is required"],
      // maxlength: 15,
    },
    altPhone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  image: [
    {
      type: String,
      // required: [true, "Upload image"],
    },
  ],
  coods: {
    lat: {
      type: String,
    },
    lon: {
      type: String,
    },
  },
});

const Item = mongoose.model("item", itemSchema);
module.exports = Item;

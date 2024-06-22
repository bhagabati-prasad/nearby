const mongoose = require('mongoose');
const geoCoder = require('../utils/geocoder');

// create Items schema
const itemSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  images: [String],
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
  },
  sold: Boolean,
  type: String,
  status: String,
  bedrooms: String,
  bathrooms: String,
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Details are required'],
  },
  price: {
    type: String,
  },
  images: [
    {
      type: String,
      // required: [true, "Upload image"],
    },
  ],
  address: {
    house: {
      type: String,
    },
    street: {
      type: String,
    },
    area: {
      type: String,
      required: [true, 'Area is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    state: {
      type: String,
      required: [true, 'State is required'],
    },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'],
    },
    country: {
      type: String,
      required: [true, 'Country name is required'],
    },
  },
  userInfo: {
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

itemSchema.pre('save', async function (next) {
  const loc = await geoCoder.geocode(
    `${this.address.area}, ${this.address.city}, ${this.address.state}, India`
  );
  this.location = {
    type: 'Point',
    lat: loc[0].latitude,
    lon: loc[0].longitude,
    formattedAddress: loc[0].formattedAddress,
  };
  next();
});

const Item = mongoose.model('item', itemSchema);
module.exports = Item;

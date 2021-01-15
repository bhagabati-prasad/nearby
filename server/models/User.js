const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    // unique: true,
  },
  altPhone: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [3, "Password must be 3 character"],
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
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  tokens: [
    {
      token: {
        type: String,
        // required: true
      },
    },
  ],
});

userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET_TOKEN
    );
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// create model
const User = mongoose.model("user", userSchema);
module.exports = User;

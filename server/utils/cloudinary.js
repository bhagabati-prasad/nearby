const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
cloudinary.config({
  cloud_name: "truncationui",
  api_key: "668832914999116",
  api_secret: "ptpPtjFj_A0qBuz-0dpAhbOovsI",
});

module.exports = cloudinary;

const nodeGeocoder = require("node-geocoder");

const options = {
  provider: "openstreetmap",
};

const geoCoder = nodeGeocoder(options);

module.exports = geoCoder;

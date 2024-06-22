const Item = require('../models/Item');

// @GET /api/items/
module.exports.getItem = async (req, res) => {
  const items = await Item.find();
  res.send(items);
};

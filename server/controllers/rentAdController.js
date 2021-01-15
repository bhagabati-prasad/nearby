const Item = require("../models/Item");

// @route POST /api/post/rent
module.exports.rentAdPost = async (req, res) => {
  try {
    // console.log({ ...req.body });
    const createRentAd = new Item({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      address: {
        house: req.body.house,
        street: req.body.street,
        area: req.body.area,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        country: req.body.country,
      },
    });
    const rentItem = await createRentAd.save();
    console.log("rent item added ", rentItem);
    res.status(200).json(rentItem);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

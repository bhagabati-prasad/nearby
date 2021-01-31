const Item = require("../models/Item");

// @route POST /api/post/rent
module.exports.rentAdPost = async (req, res) => {
  try {
    const userId = req.headers["user-id"];
    const createRentAd = new Item({
      userId: userId,
      category: "rent",
      subcategory: undefined,
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
        country: "India",
      },
      images: ["default-rent-image.jpg", "default-rent-image2.jpg"],
    });
    const rentItem = await createRentAd.save();
    console.log("rent item added ", rentItem);
    res.status(200).json(rentItem);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

// @route POST /api/post/service
module.exports.serviceAdPost = async (req, res) => {
  try {
    const userId = req.headers["user-id"];
    const createServiceAd = new Item({
      userId: userId,
      category: req.body.category,
      subcategory: req.body.subcategory,
      title: req.body.title,
      description: req.body.description,
      price: undefined,
      address: {
        house: req.body.house,
        street: req.body.street,
        area: req.body.area,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        country: "India",
      },
      images: ["default-service-image.jpg", "default-service-image2.jpg"],
    });
    const serviceItem = await createServiceAd.save();
    console.log("service item added ", serviceItem);
    res.status(200).json(serviceItem);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

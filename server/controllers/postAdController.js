const Item = require('../models/Item');

// @route POST /api/post/rent
module.exports.rentAdPost = async (req, res) => {
  try {
    const userId = req.headers['user-id'];
    const createRentAd = new Item({
      userId: userId,
      category: 'rent',
      subcategory: undefined,
      title: req.body?.title,
      description: req.body?.description,
      price: req.body?.price,
      type: req.body?.type,
      status: req.body?.status,
      bedrooms: req.body?.bedrooms,
      bathrooms: req.body?.bathrooms,
      address: {
        house: req.body?.house,
        street: req.body?.street,
        area: req.body?.area,
        city: req.body?.city,
        state: req.body?.state,
        pincode: req.body?.pincode,
        country: 'India',
      },
      userInfo: {
        name: req.body?.name,
        phone: req.body?.phone,
        email: req.body?.email,
      },
      images: req.body?.images,
    });
    const rentItem = await createRentAd.save();
    console.log('rent item added ', rentItem);
    res.status(200).json({ item: rentItem });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

// @route POST /api/post/service
module.exports.serviceAdPost = async (req, res) => {
  try {
    const userId = req.headers['user-id'];
    const createServiceAd = new Item({
      userId: userId,
      category: req.body?.category,
      subcategory: req.body?.subcategory,
      title: req.body?.title,
      description: req.body?.description,
      price: undefined,
      images: req.body?.images,
      address: {
        house: req.body?.house,
        street: req.body?.street,
        area: req.body?.area,
        city: req.body?.city,
        state: req.body?.state,
        pincode: req.body?.pincode,
        country: 'India',
      },
    });
    const serviceItem = await createServiceAd.save();
    console.log('service item added ', serviceItem);
    res.status(200).json({ item: serviceItem });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

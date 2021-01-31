const User = require("../models/User");
const cloudinary = require("../utils/cloudinary");

// Not in use --------
// @GET path is not set
module.exports.getImges = async (req, res) => {
  try {
    const { resources } = cloudinary.search
      .expression("folder:profile_picture")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();
    const publicIds = resources.map((file) => file.public_id);
    res.json(publicIds);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// @PATCH /api/user/upload/picture/:id
module.exports.uploadProfilePicture = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image);
    const data = {
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    };
    const _id = req.params.id;
    user = await User.findByIdAndUpdate(_id, data, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// ------------

// @PATCH /api/user/update/picture/:id
module.exports.updateProfilePicture = async (req, res) => {
  try {
    // find user by id
    const _id = req.params.id;
    let user = await User.findById(_id);

    // delete image from cloudinary
    if (user.cloudinary_id)
      await cloudinary.uploader.destroy(user.cloudinary_id);

    // upload a new image
    const image = req.body.image;
    const result = await cloudinary.uploader.upload(image, {
      upload_preset: "profile_picture",
    });
    const data = {
      avatar: result.secure_url || user.avatar,
      cloudinary_id: result.public_id || user.cloudinary_id,
    };
    user = await User.findByIdAndUpdate(_id, data, {
      new: true,
    });

    res.json({ isLoggedIn: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// @DELETE /api/user/delete/picture/:id
module.exports.deleteProfilePicture = async (req, res) => {
  try {
    const _id = req.params.id;
    // find user by id
    let user = await User.findById(_id);
    //delete image from cloudinry
    await cloudinary.uploader.destroy(user.cloudinary_id);
    const data = {
      avatar: undefined,
      cloudinary_id: undefined,
    };
    user = await User.findByIdAndUpdate(_id, data, {
      new: true,
    });

    res.json({ isLoggedIn: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/*
{
  "asset_id": "fbaa7511291ef47935189e809039345f",
  "public_id": "vfipwiz1ha7u7bmy8hgc",
  "version": 1612018908,
  "version_id": "826ce83149ba583a25d1904099db421b",
  "signature": "b1ff297ca03c05fad08880b400051e8c798d690d",
  "width": 1126,
  "height": 804,
  "format": "png",
  "resource_type": "image",
  "created_at": "2021-01-30T15:01:48Z",
  "tags": [],
  "bytes": 1048063,
  "type": "upload",
  "etag": "1ddff30c8a338ad003f495f5a571af5e",
  "placeholder": false,
  "url": "http://res.cloudinary.com/truncationui/image/upload/v1612018908/vfipwiz1ha7u7bmy8hgc.png",
  "secure_url": "https://res.cloudinary.com/truncationui/image/upload/v1612018908/vfipwiz1ha7u7bmy8hgc.png",
  "original_filename": "321a4a61eb3c84ca0ae60ddd6008e0c2"
}
*/

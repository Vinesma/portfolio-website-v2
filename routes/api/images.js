const express = require('express');
const router = express.Router();

const ImageCategory = require('../../models/ImageCategory');

// @route  GET api/images
// @desc   Get category listing of images
// @access Public

router.get('/', (req, res) => {
    ImageCategory
        .find()
        .then(ImageCategory => res.json(ImageCategory));
});

// @route  POST api/images
// @desc   Create a new image category
// @access Public

router.post('/', (req, res) => {
    const newCategory = new ImageCategory({
        name: req.body.name,
        icon: req.body.icon,
        shorthand: req.body.shorthand,
        imageList: req.body.imageList,
    });
    newCategory.save().then(imageCategory => res.json(imageCategory));
});

module.exports = router;
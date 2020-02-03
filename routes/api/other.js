const express = require('express');
const router = express.Router();

const Other = require('../../models/Other');

// @route  GET api/other
// @desc   Get listing of others
// @access Public

router.get('/', (req, res) => {
    Other
        .find()
        .then(Other => res.json(Other));
});

// @route  POST api/other
// @desc   Create a other
// @access Public

router.post('/', (req, res) => {
    const newOther = new Other({
        description: req.body.description,
        description_pt: req.body.description_pt,
    });
    newOther.save().then(Other => res.json(Other));
});

module.exports = router;
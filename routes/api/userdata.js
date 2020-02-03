const express = require('express');
const router = express.Router();

const UserData = require('../../models/UserData');

// @route  GET api/userdata
// @desc   Get listing of userdata
// @access Public

router.get('/', (req, res) => {
    UserData
        .find()
        .then(UserData => res.json(UserData));
});

// @route  POST api/userdata
// @desc   Create an userdata
// @access Public

router.post('/', (req, res) => {
    const newUserData = new UserData({
        name: req.body.name,
        nationality: req.body.nationality,
        nationality_pt: req.body.nationality_pt,
        maritalStatus: req.body.maritalStatus,
        maritalStatus_pt: req.body.maritalStatus_pt,
        yearOfBirth: req.body.yearOfBirth,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        homePhone: req.body.homePhone,
        cellPhone: req.body.cellPhone,
        email: req.body.email,
        website: req.body.website,
    });
    newUserData.save().then(UserData => res.json(UserData));
});

module.exports = router;
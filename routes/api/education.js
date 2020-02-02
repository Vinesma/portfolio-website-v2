const express = require('express');
const router = express.Router();

const Education = require('../../models/Education');

// @route  GET api/educations
// @desc   Get listing of education
// @access Public

router.get('/', (req, res) => {
    Education
        .find()
        .then(Education => res.json(Education));
});

// @route  POST api/educations
// @desc   Create an education
// @access Public

router.post('/', (req, res) => {
    const newEducation = new Education({
        school: req.body.school,
        degree: req.body.degree,
        degree_pt: req.body.degree_pt,
        field: req.body.field,
        field_pt: req.body.field_pt,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        description_pt: req.body.description_pt,
    });
    newEducation.save().then(Education => res.json(Education));
});

module.exports = router;
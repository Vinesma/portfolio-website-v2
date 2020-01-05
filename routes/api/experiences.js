const express = require('express');
const router = express.Router();

const Experience = require('../../models/Experience');

// @route  GET api/experiences
// @desc   Get listing of job experience
// @access Public

router.get('/', (req, res) => {
    Experience
        .find()
        .then(experience => res.json(experience));
});

// @route  POST api/experiences
// @desc   Create a job experience
// @access Public

router.post('/', (req, res) => {
    const newExperience = new Experience({
        title: req.body.title,
        type: req.body.type,
        company: req.body.company,
        currentlyEmployed: req.body.currentlyEmployed,
        from: req.body.from,
        to: req.body.to,
        comment: req.body.comment,
    });
    newExperience.save().then(experience => res.json(experience));
});

module.exports = router;
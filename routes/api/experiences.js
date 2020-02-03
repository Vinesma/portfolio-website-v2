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
        title_pt: req.body.title_pt,
        type: req.body.type,
        type_pt: req.body.type_pt,
        company: req.body.company,
        currentlyEmployed: req.body.currentlyEmployed,
        from: req.body.from,
        to: req.body.to,
        comment: req.body.comment,
        comment_pt: req.body.comment_pt,
    });
    newExperience.save().then(experience => res.json(experience));
});

module.exports = router;
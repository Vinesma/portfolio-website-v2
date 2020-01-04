const express = require('express');
const router = express.Router();

const SkillCategory = require('../../models/SkillCategory');

// @route  GET api/skills
// @desc   Get category listing of skills
// @access Public

router.get('/', (req, res) => {
    SkillCategory
        .find()
        .then(skillCategory => res.json(skillCategory))
});

// @route  POST api/skills
// @desc   Create a new skill category
// @access Public

router.post('/', (req, res) => {
    console.log(req.body);
    const newSkill = new SkillCategory({
        category: req.body,
    });

    newSkill.save().then(category => res.json(category));
});

module.exports = router;
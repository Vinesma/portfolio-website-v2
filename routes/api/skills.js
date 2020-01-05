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
    const newSkill = new SkillCategory({
        name: req.body.name,
        icon: req.body.icon,
        skillList: req.body.skillList,
    });
    console.log(newSkill);
    newSkill.save().then(category => res.json(category));
});

module.exports = router;
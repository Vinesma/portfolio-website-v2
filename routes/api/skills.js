const express = require('express');
const router = express.Router();

const SkillCategory = require('../../models/SkillCategory');

// @route  GET api/skills
// @desc   Get category listing of skills
// @access Public

router.get('/', (req, res) => {
    SkillCategory.aggregate([
    { $unwind : '$skillList' },
    { $sort : { 'skillList.proficiency' : -1 }},
    { $group : {
        _id: '$_id',
        name: { $last : '$name' },
        icon: { $last : '$icon' },
        skillList: { $push : '$skillList' }} }])
    .then(skillCategory => res.json(skillCategory));
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
    newSkill.save().then(category => res.json(category));
});

module.exports = router;
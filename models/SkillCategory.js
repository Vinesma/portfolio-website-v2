const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = new Schema();

Skill.add({
    name: { type: String, required: true },
    proficiency: { type: Number, required: true },
    icon: { type: String, default: "" },
});

let SkillCategory = new Schema({
    name: { type: String, required: true },
    name_pt: { type: String, required: true },
    icon: { type: String, default: "" },
    skillList: [ Skill ],
});

module.exports = SkillCategory = mongoose.model('skillCategory', SkillCategory);
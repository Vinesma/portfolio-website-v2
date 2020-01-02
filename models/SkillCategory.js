const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = new Schema();
const Category = new Schema();

Skill.add({
    name: { type: String, required: true },
    proficiency: { type: Number, required: true },
    icon: { type: String },
});

Category.add({
    name: { type: String, required: true },
    icon: { type: String },
    skillList: [ Skill ],
});

let SkillCategory = new Schema({
    categories : [ Category ],
});

module.exports = SkillCategory = mongoose.model('skillCategory', SkillCategory);
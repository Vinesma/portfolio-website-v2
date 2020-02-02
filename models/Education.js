const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Education = new Schema({
    school: { type: String, required: true },
    degree: { type: String, default: "" },
    degree_pt: { type: String, default: "" },
    field: { type: String, required: true },
    field_pt: { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String, default: "" },
    description_pt: { type: String, default: "" },
});

module.exports = Education = mongoose.model('education', Education);
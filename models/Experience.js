const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Experience = new Schema({
    title: { type: String, required: true },
    type: { type: String, default: "" },
    company: { type: String, default: "" },
    currentlyEmployed: { type: Boolean, default: false },
    from: { type: Date },
    to: { type: Date },
    comment: { type: String, default: "" },
});

module.exports = Experience = mongoose.model('experience', Experience);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Other = new Schema({
    description: { type: String, required: true },
    description_pt: { type: String, required: true },
});

module.exports = Other = mongoose.model('other', Other);
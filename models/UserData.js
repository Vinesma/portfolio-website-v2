const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserData = new Schema({
    name: { type: String, required: true },
    nationality: { type: String, required: true },
    nationality_pt: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    maritalStatus_pt: { type: String, required: true },
    yearOfBirth: { type: Number, default: 1997 },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    homePhone: { type: String, default: "" },
    cellPhone: { type: String, default: "" },
    email: { type: String, required: true },
    website: { type: String, required: true },
});

module.exports = UserData = mongoose.model('userdata', UserData);
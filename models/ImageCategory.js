const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = new Schema();

Image.add({
    link: { type: String, required: true },
    thumbnail: { type: String, required: true },
    hoverComment: { type: String, default: "" },
});

let ImageCategory = new Schema({
    name: { type: String, required: true },
    icon: { type: String, default: "" },
    shorthand: { type: String, required: true },
    imageList: [ Image ],
});

module.exports = ImageCategory = mongoose.model('imageCategory', ImageCategory);
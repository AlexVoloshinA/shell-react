const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 8
    },
    color: {
        type: [String],
        required: true
    }
});


module.exports = Product = mongoose.model('product', productSchema);

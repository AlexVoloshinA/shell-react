const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        required: true,
        minlength: 4,
        maxlength: 8
    },
    colors: []
});


const product = mongoose.model('product', productSchema);
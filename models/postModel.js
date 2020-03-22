const mongoose = require('mongoose')

const modelPost =  mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: false
    }
});

//exportarlo para su empleacion

module.exports = mongoose.model('Post', modelPost) 
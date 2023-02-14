const mongoose = require('mongoose');

//create shema or table in mongodb

const nomineeShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required:true 
    },
    votes: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Nominee', nomineeShema);
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    elementname: {
        type: String,
        required: true,
        unique: true
    },
    
    eletroconf: {
        type: String,
        required: true,
        unique: true
    },

    group: {
        type: String,
        required: true
    },

    period: {
        type: String,
        required: true
    },

    elementtype: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    curiosity: {
        type: String,
        required: true
    },

    atomicnumber: {
        type: String,
        required: true
    },

    molarmass: {
        type: String,
        required: true
    },

    interestingreactions:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)
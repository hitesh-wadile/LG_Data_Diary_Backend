const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim:true
    },
    middleName: {
        type: String,
        required: true,
        trim:true
    },
    lastName: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true
    },
    password: {
        type: String,
        required: true
    },
    personalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "personalDetails"
    }
});


module.exports = mongoose.model('Student', studentSchema);
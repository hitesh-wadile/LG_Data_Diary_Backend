const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    middleName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    // Referenced models
    parent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "parentDetails",
        }
    ],
    personalDetails: { type: mongoose.Schema.Types.ObjectId, ref: "PersonalDetail" },
    bank: { type: mongoose.Schema.Types.ObjectId, ref: "bankDetails" },
    academic: { type: mongoose.Schema.Types.ObjectId, ref: "academicDetails" },
    engineering: { type: mongoose.Schema.Types.ObjectId, ref: "engineeringDetails" },
    portfolio: { type: mongoose.Schema.Types.ObjectId, ref: "portfolio" },
    LGdetails: { type: mongoose.Schema.Types.ObjectId, ref: "LGdetails" },

    // for JWT token
    token: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
});


// pre-save middleware to set referenced fields to null before saving
studentSchema.pre("save", function (next) {
    this.personalDetails = null; 
    this.bank = null; 
    this.academic = null; 
    this.engineering = null; 
    this.portfolio = null; 
    this.LGdetails = null; 
    next();
});

module.exports = mongoose.model('Student', studentSchema);
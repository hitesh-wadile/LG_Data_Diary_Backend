const mongoose = require("mongoose");

const academicSchema = new mongoose.Schema({
    SSC: {
        instituteName: { type: String },
        board: { type: String },
        yearOfAdmission: { type: Number },
        yearOfPassing: { type: Number },
        marksObtained: { type: Number },
        percentage: { type: Number },
    },
    HSC: {
        instituteName: { type: String },
        board: { type: String },
        yearOfAdmission: { type: Number },
        yearOfPassing: { type: Number },
        marksObtained: { type: Number },
        percentage: { type: Number },
    },
    diplomaDetails: {
        instituteName: { type: String },
        board: { type: String },
        branch: { type: String }, 
        yearOfAdmission: { type: Number },
        yearOfPassing: { type: Number },
        marks: { 
            sem1: Number,
            sem2: Number,
            sem3: Number,
            sem4: Number,
            sem5: Number,
            sem6: Number,
        },
        percentage: { type: Number },
    }
});

const defaultAcademicDetails = {
    SSC: {
        instituteName: null,
        board: null,
        yearOfAdmission: null,
        yearOfPassing: null,
        marksObtained: null,
        percentage: null,
    },
    HSC: {
        instituteName: null,
        board: null,
        yearOfAdmission: null,
        yearOfPassing: null,
        marksObtained: null,
        percentage: null,
    },
    diplomaDetails: {
        instituteName: null,
        board: null,
        branch: null,
        yearOfAdmission: null,
        yearOfPassing: null,
        marks: {
            sem1: null,
            sem2: null,
            sem3: null,
            sem4: null,
            sem5: null,
            sem6: null,
        },
        percentage: null,
    }
}

module.exports = mongoose.model("AcademicDetail", academicSchema);
module.exports.defaultAcademicDetails = defaultAcademicDetails;
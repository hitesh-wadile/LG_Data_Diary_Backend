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

module.exports = mongoose.model("AcademicDetail", academicSchema);

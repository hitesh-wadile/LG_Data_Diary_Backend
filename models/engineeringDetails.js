const mongoose = require("mongoose");

const engineeringSchema = new mongoose.Schema({
    branch: { type: String },
    year: { type: Number },
    division: { type: String },
    semesters: [
        {
            semesterNumber: { type: Number }, // Semester number (e.g., 1, 2, 3, ...)
            subjects: [
                {
                    name: { type: String },
                    marks: { type: Number },
                }
            ],
            sgpa: { type: Number },
            cgpa: { type: Number },
        },
    ],
});

const defaultEngineeringDetails = {
    branch: null,
    year: null,
    semesters: [
        {
            semesterNumber: null,
            subjects: [],
            sgpa: null,
            cgpa: null,
        },
    ],
}

module.exports = mongoose.model("EngineeringDetail", engineeringSchema);
module.exports.defaultEngineeringDetails = defaultEngineeringDetails;


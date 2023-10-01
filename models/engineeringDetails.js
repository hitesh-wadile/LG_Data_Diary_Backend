const mongoose = require("mongoose");

const engineeringSchema = new mongoose.Schema({
    branch: { type: String },
    year: { type: Number },
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

module.exports = mongoose.model("EngineeringDetail", engineeringSchema);



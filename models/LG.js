const mongoose = require("mongoose");

const lgSchema = new mongoose.Schema({
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    email: { type: String, trim: true },
    mobile: { type: String, trim: true },
    password: { type: String },
    profilePhoto: {type: String },
    expertise: { type: String },
    experience: { type: Number },
});

module.exports = mongoose.model("LGdetail", lgSchema);


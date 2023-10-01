const mongoose = require("mongoose");

const lgSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    mobile: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    profilePhoto: {type: String},
    expertise: { type: String },
    experience: { type: Number },
});

module.exports = mongoose.model("LGdetail", lgSchema);


const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
    relationship: { type: String },  // (e.g. father/mother/guardian)
    name: { type: String },
    qualification: { type: String },
    occupation: { type: String },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        district: { type: String, trim: true },
        state: { type: String, trim: true },
        pincode: { type: String, trim: true },
    },
    mobile: { type: String },
    email: { type: String },
});

module.exports = mongoose.model("ParentDetail", parentSchema);


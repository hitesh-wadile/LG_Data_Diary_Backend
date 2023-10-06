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

const defaultParentDetails = {
    relationship: null,
    name: null,
    qualification: null,
    occupation: null,
    address: {
        street: null,
        city: null,
        district: null,
        state: null,
        pincode: null,
    },
    mobile: null,
    email: null,
}

module.exports = mongoose.model("ParentDetail", parentSchema);
module.exports.defaultParentDetails = defaultParentDetails;

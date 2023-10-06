const mongoose = require("mongoose");

const StudentDetailSchema = new mongoose.Schema({
    profilePhoto: {
        type: String //  file path or reference to the file
    },
    signature: {
        type: String //  file path or reference to the file
    },
    PRN: {
        type: String,
        trim: true
    },
    yearOfAdmission: {
        type: Number
    },
    yearOfPassing: {
        type: Number
    },
    currentYearOfStudy: {
        type: Number
    },
    aadharNumber: {
        type: String,
        trim: true
    },
    gender: {
        type: String
    },
    category: {
        type: String
    },
    religion: {
        type: String
    },
    caste: {
        type: String
    },
    nationality: {
        type: String
    },
    domicile: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    dateOfBirth: {
        type: Date
    },
    hostelRoomNumber: {
        type: String
    },
    currentAddress: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        district: { type: String, trim: true },
        state: { type: String, trim: true },
        pincode: { type: String, trim: true },
    },
    permanentAddress: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        district: { type: String, trim: true },
        state: { type: String, trim: true },
        pincode: { type: String, trim: true },
    },
    mobile: {
        type: String,
        trim: true
    },
    friendMobile: {
        type: String, // Optional field
        trim: true
    },
    studentDocuments: [
        {
            name: { type: String, trim: true },
            url: { type: String, trim: true },
        }
    ],
});


const defaultProfile = {
    profilePhoto: null,
    signature: null,
    PRN: null,
    yearOfAdmission: null,
    yearOfPassing: null,
    currentYearOfStudy: null,
    aadharNumber: null,
    gender: null,
    category: null,
    religion: null,
    caste: null,
    nationality: null,
    domicile: null,
    bloodGroup: null,
    maritalStatus: null,
    weight: null,
    height: null,
    dateOfBirth: null,
    hostelRoomNumber: null,
    currentAddress: {
        street: null,
        city: null,
        district: null,
        state: null,
        pincode: null,
    },
    permanentAddress: {
        street: null,
        city: null,
        district: null,
        state: null,
        pincode: null,
    },
    mobile: null,
    friendMobile: null,
    studentDocuments: [],
    parent: [],
};

module.exports = mongoose.model("PersonalDetail", StudentDetailSchema);
module.exports.defaultProfile = defaultProfile;
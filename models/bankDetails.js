const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
    bankName: { type: String },
    ifscCode: { type: String },
    accountNumber: { type: String },
});

module.exports = mongoose.model("BankDetail", bankSchema);

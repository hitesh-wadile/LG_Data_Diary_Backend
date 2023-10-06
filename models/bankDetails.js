const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
    bankName: { type: String },
    ifscCode: { type: String },
    accountNumber: { type: String },
});

const defaultBankDetails = {
    bankName: null,
    ifscCode: null,
    accountNumber: null,
}

module.exports = mongoose.model("BankDetail", bankSchema);
module.exports.defaultBankDetails = defaultBankDetails;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    ReferredUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    isPaymentMade: {
        type: Boolean,
        required: false,
        default: false
    },
    TotalEarnings: {
        type: Number,
        required: false,
        default: 0
    }
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    }
})

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
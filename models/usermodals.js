const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            require: [true, "Please Enter Your First Name"],
        },
        lastName: {
            type: String,
            require: [true, "Please Enter Your Last Name"],
        },
        email: {
            type: String,
            require: [true,"Enter your email"],
        },
        password: {
            type: String,
            require: [true,"Enter your password"],
        },
        age: {
            type: String,
            require: [true,"Enter your name"],
        },
        gender: {
            type: String,
            require: [true,"Enter your name"],
        },
        bloodGroup: {
            type: String,
            require: [true,"Enter your name"],
        },
        phoneNumber: {
            type: String,
            require: [true,"Enter your name"],
        },
    },
    {}
)

const User = mongoose.model('User', userSchema);
module.exports = User;
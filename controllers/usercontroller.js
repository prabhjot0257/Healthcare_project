const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/usermodals");
require("dotenv").config();


const registerUser = asyncHandler(async(req,res) => {
    const {firstName, lastName, email, password, age, gender, bloodGroup, phoneNumber} = req.body;

    // Check if the fields are provided
    if(!firstName || !lastName || !email || !password || !age || !gender ||  !bloodGroup || !phoneNumber){
        res.status(400);
        throw new Error("Please provide all fields");
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists){
        return res.status(400).json({ message: "User already Exists"});
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        age,
        gender,
        bloodGroup,
        phoneNumber
    });

    if (user) {
        res.status(201).json({
            message: "User Registered Successfully",
            user: {
                // _id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                age: user.age,
                gender: user.gender,
                bloodGroup: user.bloodGroup,
                phoneNumber: user.phoneNumber
            }
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

module.exports = { registerUser};
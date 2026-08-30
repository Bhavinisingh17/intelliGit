const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (username, email, password) => {

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    return user;
};



///LOGIN USER

const loginUser = async (email, password) => {
    const user = await User.findOne({email});

    if(!user){
        throw new Error("Invalid email or password");
    }

     // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    // 3. Create JWT
    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return {
        token,
        user: {
            username: user.username,
            email: user.email
        }
    };
};


module.exports = {
    registerUser,
    loginUser
};
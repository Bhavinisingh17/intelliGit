const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../config/email");

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
        throw new Error("You are not registered");
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



//change password

const changePassword = async(userId, password) => {
 const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(
        userId,
        { password: hashedPassword },
        { new: true }
    );

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}

const resetpassword = async (email) => {
    const user = await User.findOne({email});
console.log(user);
     if (!user) {
        throw new Error("User with this email does not exist");
    }

    const secret = user._id + process.env.JWT_SECRET_KEY

        const token = jwt.sign({userID: user._id}, secret, {
            expiresIn: '15m'
        })
  const link = `http://localhost:5173/reset-password/${user._id}/${token}`; 

  console.log(link);

  let info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: "IntelliGit - Password Reset",
    html: `
        <h2>Reset your IntelliGit password</h2>

        <p>Click the button below to reset your password:</p>

        <a href="${link}">
            Reset Password
        </a>

        <p>This link will expire in 15 minutes.</p>
    `
});
  return link; 
}




///reset password
const userPasswordReset = async(userId, token, password) => {
    const user = await User.find(userId);

    if (!user) {
        throw new Error("User not found");
    }

   const newsecret = user._id + process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, newsecret);

    if (decoded.userID !== userId) {
        throw new Error("Invalid reset token");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    await user.save();

    return user;

}

module.exports = {
    registerUser,
    loginUser,
    changePassword,
    resetpassword,
    userPasswordReset
};
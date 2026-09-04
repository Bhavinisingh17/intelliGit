// Controller = handles the request/response.
const authService = require("../services/auth");


// {SIGNUP}

const register = async(req, res) => {
    try {
        // It retrieves data from the incoming request.

        const { username, email, password } = req.body;

        // 2. Give the data to the service
        const user = await authService.registerUser(
            username,
            email,
            password
        );
        console.log(user);

// It sends a response to the frontend.

        res.status(201).json({
            message: "User registered successfully",
   user: {
        username: user.username,
        email: user.email
    }    
    })
    }catch (error) {
        res.status(400).json({
            message: error.message
        });
}
}



// {LOGIN}


const login = async(req, res) => {
const {email, password} = req.body;
const result = await authService.loginUser(
            email,
            password
        );
    
          res.status(200).json({
            message: "Login successful",
            token: result.token,
            user: result.user
        });
    }

    //Change password

const changePass = async (req, res) => {
    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({
                message: "Password is required"
            });
        }

        const userId = req.user._id;
       

        await authService.changePassword(userId, password);

        return res.status(200).json({
            message: "Password changed successfully"
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

///if user forget password then reset through email
const sendUserPasswordResetEmail = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                status: "failed",
                message: "Email field is required"
            });
        }

        const link = await authService.resetpassword(email);

        console.log(link);

        return res.status(200).json({
            status: "success",
            message: "Password reset link generated"
        });

    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        });
    }
};

//reset password

const userPasswordReset = async (req, res) => {
    try {
        const { password } = req.body;
        const { id, token } = req.params;

        if (!password) {
            return res.status(400).json({
                status: "failed",
                message: "Password is required"
            });
        }

        await authService.userPasswordReset(
            id,
            token,
            password
        );

        return res.status(200).json({
            status: "success",
            message: "Password reset successfully"
        });

    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        });
    }
};

module.exports = {
    register,
    login,
    changePass,
    sendUserPasswordResetEmail,
    userPasswordReset
};
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


module.exports = {
    register,
    login
};
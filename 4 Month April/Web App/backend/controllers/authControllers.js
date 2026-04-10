// Register User API

const register = async( req , res ) => {
    try {
         res.status(201).json({
            message: "Register Account Successful",
        })

    } catch (error) {
        console.log(error)
    }
}

// Login API

const login = async( req , res ) => {
    try {
        res.status(201).json({
            message: "Login Successful",
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { login , register }
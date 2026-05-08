// Register User API

const jwt = require("jsonwebtoken")
const Users = require("../models/userModel")

const register = async( req , res ) => {
    try {

        const {name , email , pass , city , mobileNo } = req.body

        const existingUser = await Users.findOne({ email : email})
        if (existingUser){
            return res.status(400).json({ message : "This Email Id Already Register"})
        }

        const user = await Users.create ({
            name,
            email,
            city,
            mobileNo,
            password : pass
        })

        const token = jwt.sign(
            { userId : user._id , email : email }, 
            process.env.JWT_SECRET_KEY,
            {
            expiresIn: "30d"
            }
        )

         res.status(201).json({
            message: "Register Account Successful",
            data : user,
            token : token
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Error while register account",
            error: error.message
        })
    }
}

// Login API

const login = async( req , res ) => {
    try {

            const { email , pass} = req.body

            const user = await Users.findOne({email , password : pass})


            const token = jwt.sign({ userId : user?._id, email: email }, process.env.JWT_SECRET_KEY,{
            expiresIn: "1d"
            })

            if (user) {
                res.status(201).json({
                message: "Login Successful",
                token : token
                })
            } else{
                res.status(404).json({
                    message: "Login Failed",
                })

            }
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Error while register account",
            error: error.message
        })
    }
}

//module.exports = { login , register }
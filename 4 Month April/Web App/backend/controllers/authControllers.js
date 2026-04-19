// Register User API

const jwt = require("jsonwebtoken")
const Users = require("../models/userModel")

const register = async( req , res ) => {
    try {

        const {name , city , mobileNo , email , pass} = req.body

        const existingUser = await Users.findOne({ email : email})
        if (existingUser){
            return res.status(400).json({ message : "This Email Id Already Register"})
        }

        const user = await Users.create ({
            name,
            city,
            mobileNo,
            email,
            password : pass
        })

        const token = jwt.sign({ userId : user._id }, process.env.JWT_SECRET_KEY,{
            expiresIn: "30d"
        })

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


            const token = jwt.sign({ userId : user._id }, process.env.JWT_SECRET_KEY,{
            expiresIn: "30d"
            })

            if (user) {
                res.status(201).json({
                message: "Login Successful",
                token : token
                })
            } else{
                res.status(201).json({
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

module.exports = { login , register }
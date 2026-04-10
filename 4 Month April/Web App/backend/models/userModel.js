// User List Table in Database


const mongoose = require('mongoose') 
// ----------------------
// Schema - Model (Database Structure)
// ----------------------

// Define structure of item document in MongoDB
const userSchema = new mongoose.Schema({

    // Item name
    name: String,

    // User Email
    email: String,

    // User Password
    password: String,
})

// Create collection/table called "Items"
const Users = mongoose.model("Users", userSchema)

module.exports = Users


// Backed Project // Node js  // Express Js // DB - MongoDb  
//API's - URL - DB Operation - CRUD

// Import Express framework (used to create server and APIs)
const express = require('express') 

// Create express application instance
const app = express() 

// Import CORS library (allows frontend apps to call backend APIs)
const cors = require('cors') 

// Connect MangoDB Database
const { connectDB } = require('./config/db')

// Middleware: convert incoming request data into JSON format
app.use(express.json()) 

// Middleware: enable Cross-Origin Resource Sharing
app.use(cors()) 


// ----------------------
// MongoDB Database Connection
// ----------------------
connectDB()


//  1. POST API to create new item
app.post("/api/create-item", addItem)


// 2. PUT API used to update existing item
app.put("/api/update-item", editItem)


// 3. DELETE API to remove item from database
app.delete("/api/delete-item/:id", deleteItem)


// 4. GET API to fetch all items from database
app.get("/api/get-all-item", getAllItems)



// ----------------------
// Health Check API
// ----------------------

// Simple API to check server is running or not
app.get("/helth", (req, res) => {

    res.status(200).json({
        message: "Server is Runing"
    })

})



// ----------------------
// Server Start
// ----------------------

// Define port number where server will run
const PORT = 9090

// Start express server
app.listen(PORT, () => {

    // Show message when server starts
    console.log('Server Started')

})
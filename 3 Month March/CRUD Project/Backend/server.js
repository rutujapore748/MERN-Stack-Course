//Backend Project

//Node js
//Express Js
//DB MangoDb


//API List
//1.API Create Item - get Data values from frontend(Item Details) and store into DB.

//2.API Update Item - get Item Details from frontend which item need to update.

//3.API Delete Item - get Item Details from frontend and delete this record from dataBase.

//4.API get All Records - get All records From DB and show to UI frontend.

//console.log("Hello Node Js")



//const getData - () ->{

//}

//function getData(){
    
//}


console.log("Hello Node Js Project Started")

const express = require('express')    //Node js framework is express js
const app = express()   // app-variable - store express function
const mongoose = require('mongoose')   // Liabrary - connect mongodb Database
const cors = require('cors')   // Liabrary solve cors error

app.use(express.json())     // convert all data into json format
app.use(cors())      


//DB Connection

mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("MongoDB Connected") ).catch((error) => console.log("error"))


//Schema - Model - Data base Table Structure
//values store database -structure


const itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    purchasePrice: Number,
    sellingPrice: Number,
    quantity: Number,
    unit: String
})

const Items = new mongoose.model("Items",itemsSchema)  // Table Name  / Collection Name - Items


//1.API Create Item

app.post("/api/create-item" , async(req, res) => {
    try{
        const { name , description , purchasePrice , sellingPrice ,  quantity ,  unit } = req.body

        const saveItem = new Items(
            {
                name,
                description,
                purchasePrice,
                sellingPrice,
                quantity,
                unit
            }
            
        )

        await saveItem.save()

        res.status(201).json({message : "Item Created" , data : saveItem})



    } catch(error) {
        console.log(error)
    }

})


//2.API Update/ Edit Item

app.put("/api/update-item" , (req, res) => {
    try{

    } catch(error) {
        console.log(error)
    }

})


//3.API Delete Item

app.delete("/api/delete-item" ,(req, res) => {
    try{

    } catch(error) {
        console.log(error)
    }
})


//4.API GetAll Item

app.get("/api/get-all-item" , async(req, res) => {
    try{

        const items = await Items.find()

        res.status(200).json({message : "Get All Item List" , data : items})

    } catch(error) {
        console.log(error)
    }
})




//Health API

app.get("/helth" ,  (req , res) =>{
    res.status(200).json({ message : "Server is Running" })
})

//Server Start
const PORT = 9090

app.listen( PORT , () =>{
    console.log("Server Started")
})







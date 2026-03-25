console.log("we are using javascript")

// variables
const name = "Hoc"           //fix value we cannot change
var surname = "Tech"         //Globle we can change anywhere in file
let middlename = "Solutions"


//functions
//normal function
function getMyName() {
    console.log("function 1")
}

getMyName()

//Arrow function
const getYourName = () => {
     console.log("function 2")
}

getYourName()

//Parameter
const getMyFullName = (data = "no name") => {
    console.log("My full name is", data)
}

const myName = "Nilesh Patil"
getMyFullName(myName)

const test = "rutuja pore"
getMyFullName(test)

getMyFullName()

//Array index -   0        1        2        3
const items = ["Test 1","Test 2","Test 3","Test 4"]
console.log(items, "Full items print")
console.log(items[2],"Print only index - 2 (second value)")

//Object  - key value pair
const studentDetails = {
   //key -   value
    name : "Rutuja Pore",
    city : "Tasgaon"
}

console.log(studentDetails , "=> studentDetails full object")
console.log(studentDetails.name , "=> studentDetails name only")
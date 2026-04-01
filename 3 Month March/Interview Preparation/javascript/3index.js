// Spread Operators
// (...)
// we can use for Arrays and Object => [],{}
// expand element (array/object) - we can add new element to the array or object

const array1=[1,2,3];
const array2=[4,5,6];
const finalArray = [...array1 , ...array2]

console.log(finalArray)


// Rest Operators
// (...)
function sum(...numbers){
    console.log(numbers); // [1,2,3]
    return numbers.reduce((a,b) => a + b);
}
console.log(sum(1 , 2 , 3 , 45 , 52 , 85)); //6

// Closures
// Nested function
function mainFunction () {
    let name = "HOC - 1"
    function nestedFunction () {
        let age = "1000"
        console.log(name) // HOC
        console.log(age)
    } 
    
    return nestedFunction()
}

const closureFunction = mainFunction()  // main function will return nestedFunction
console.log(mainFunction())   //HOC


// Immediately Invoked Function Expression (IIFE)
;(function(){
    console.log("I am Immediately Invoked Function Expression (IIFE)")
})();

// Self Invoking Function
;(function(){
    console.log("I am a self-invoking function")
})();



// Heigher Order Functions (HOC)
// Takes another function as argument or return a function
// Used for reusable or cleaner code
const myFunction = (name) => {
    const a = 5
    console.log(a)
    return "Hello" + name
    var b = 5
    console.log(b)
}
const processedFunction = (fun) => {
    console.log("Processing Function...", fun("HOC"))
}
console.log(processedFunction(myFunction))   //  Processing Function... undefined


// Destructing - Object , Array

// Destructing - Object
const data = {
    name : "abc",
    email : "abc@gmail.com",
    age : 23
}
console.log(data, "==> Full Object")

const { name , email , age } = data

console.log(name) // abc

console.log(email)  // abc@gmail.com

// Array Destructing
        //         0         1          2          3         4 
const array = ["test 1" , "test 2" , "test 3" , "test 4" , "test 5"]

const [ a, b , c ] = array

console.log(a)  // Test 1
console.log(b)  // Test 2
console.log(c)  // Test 3
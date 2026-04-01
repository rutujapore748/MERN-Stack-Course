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


// Heigher Order Component
// Heigher Order Functions (HOC)
// Destructing - Object , Array
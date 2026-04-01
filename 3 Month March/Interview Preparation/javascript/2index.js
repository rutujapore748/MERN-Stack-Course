// Javascript
// React Js
// Node Js

// Synchronous and Asynchronous
// Callbacks
// Promises
// async / await

// 1. set Timeout

// console.log(1)
// console.log(11)
// setTimeout(() => {
//    console.log(2)
// }, 1000)
// console.log(3)

// 1. Call Backs - Asynchronous

const getData = (callBackFunction) => {
    console.log("Hello Get Data")
    callBackFunction()
 }

 //const callBackFunction = () => {
 //   console.log("Call Back Function Called")
 // }

 //getData(callBackFunction)

 getData(() => console.log("Call Back Function is called"))  //shortform to callbac function
 getData(() => console.log(124589))
 

// 2. Promises - Asynchronous
//      resolve / pending / reject

const myPromise = new Promise( 
    (resolve, reject) => {
        const error = false
        if (error==true){
            resolve("Promise Rejected")
        } else {
            reject("Promise Resolved")
        }  
    }
)

// Pending
const testPromise = new Promise(
    (resolve, reject) => {

    }
)
console.log(testPromise)

myPromise.then((res) => console.log(res)).catch((error) => console.log(error))

// 3. async / await -  Asynchronous

const myFunction = async () => {
    // API Integration
    // DB Call - add,delete,update,get from DB - await
}



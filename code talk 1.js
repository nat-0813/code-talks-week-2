//eventual success or failure of an async with its resulting value
//3 states: pending, fullfilled, and rejected
//pros: integrated error handling and more organized control of async logic
//cons: only one object can be returned and we cant return multiple arguments
const myPromise = new Promise((resolve,reject)=>{
    let a = 100 + 100;
    if (a==200){
        resolve("success");
    }else{
        reject("Failed");
    }
});

myPromise
.then((message) => {
    console.log(`this is a : ${message}`)//console logs a message if resolved
})
.catch((message) => {
    console.log(`this is a: ${message}`);//consoles a  message if rejected
});
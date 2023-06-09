//Async/await is a feature introduced in JavaScript to handle asynchronous operations in a more synchronous and readable manner. It is built on top of Promises and provides a syntactic sugar that simplifies working with asynchronous code.
//Async/await allows you to write asynchronous code that resembles synchronous code, making it easier to understand and maintain. 
//It eliminates the need for explicit promise chaining and callback functions, leading to code that is more readable and less prone to callback hell.
//pros: Readability,Error handling,Debugging
//cons:Requires Promises,Sequential execution:By default, async/await executes asynchronous operations sequentially. If you have independent operations that can run concurrently, async/await might not provide the same performance benefits as other asynchronous patterns.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function runAsyncOperations() {
    console.log('Start');
  
    await delay(2000);
    console.log('Operation 1 completed');
  
    await delay(1000);
    console.log('Operation 2 completed');
  
    console.log('End');
  }
  
  runAsyncOperations();
  
//we define an async function runAsyncOperations that uses await to pause the execution of the function while waiting for the delay function to resolve. The delay function returns a Promise that resolves after the specified time.
//the this keyword refers to the context in which a function is executed. It provides access to the current object or the object on which a method is called
//The behavior of the this keyword differs between arrow functions and regular functions
//In regular functions, the value of this is determined by how the function is called. It can vary based on the function invocation context
//The value of this is dynamically set at runtime and is determined by the function's execution context, which can be the global object (in non-strict mode), the object on which the function is called (as a method), or when using the new keyword to create an instance of an object.
//On the other hand, arrow functions do not have their own binding of this. Instead, they inherit the this value from the surrounding scope or the nearest non-arrow function

// Regular function
const regularFunction = function() {
    console.log(this);
  };
  
  regularFunction(); // Logs the global object (e.g., Window in a browser)
  
  const obj = {
    method: regularFunction
  };
  
  obj.method(); // Logs the obj object
  
  // Arrow function
  const arrowFunction = () => {
    console.log(this);
  };
  
  arrowFunction(); // Logs the global object 
  
  const arrowObj = {
    method: arrowFunction
  };
  
  arrowObj.method(); // Logs the global object 

  //the regular function regularFunction uses dynamic scoping for this.
  // When called directly (regularFunction()), this refers to the global object (Window in a browser environment). 
  //However, when the function is invoked as a method (obj.method()), this refers to the object obj.
  //the arrow function arrowFunction uses lexical scoping for this.
  // In both cases, whether called directly or as a method, this refers to the global object (Window in a browser environment) because the arrow function inherits the this value from its surrounding scope.
  //important note:arrow functions are particularly useful when working with asynchronous code or when we want to preserve the value of this from an outer context inside a callback function, as arrow functions do not have their own binding of this
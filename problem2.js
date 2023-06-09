//callback is a function that is passed as an argument to another function and is invoked inside that function at a certain point or upon completion of an asynchronous operation. 
//Callbacks are commonly used in JavaScript for handling asynchronous code and executing code after an operation has finished.
//Callback hell refers to the situation where callbacks are nested within each other, resulting in deeply nested and hard-to-read code. 
//It occurs when there are multiple asynchronous operations that depend on each other, and the code becomes difficult to follow due to the indentation and callback functions being passed as arguments to other callback functions
//Problematic:Readability and Maintainability, Error Handling, Code Reusability

asyncHell1(function (error, result1) {
    if (error) {
      console.error('Error in operation 1:', error);
    } else {
      asyncHell2(result1, function (error, result2) {
        if (error) {
          console.error('Error in operation 2:', error);
        } else {
          asyncHell3(result2, function (error, result3) {
            if (error) {
              console.error('Error in operation 3:', error);
            } else {
              // Continue with more nested callbacks...
            }
          });
        }
      });
    }
  });

  //To avoid callback hell, modern JavaScript introduced alternative approaches like Promises and async/await
  // These provide more structured and readable ways to handle asynchronous operations, allowing for sequential and error-handling code without deep nesting
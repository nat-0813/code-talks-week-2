//promise is an object in js that represents he eventual completion or failure of an asynchronous operation and its resulting value. It provides a way to handle asynchronous operations in a more structured and manageable manner
//used for: Promises are used for handling asynchronous operations such as making API requests, reading from a file, or executing a database query
//They help to simplify and organize the flow of asynchronous code, making it easier to handle success and error cases, as well as chaining multiple asynchronous operations together.
//Pros:Improved Readability, Error Handling, Chaining and Composition,Promise.all() and Promise.race()
//cons: Promise Support, Promise Hell

function fetchData() {//create fecth data function
    return new Promise((resolve, reject) => {//returns a promise
      setTimeout(() => {//inside promise we simulate an async operation using setTimeout
        const data = 'Some data';
        if (data) {//if the data is available, we call resolve and pass the data.
          resolve(data);
        } else {//Otherwise, we call reject with an error message. We handle the resolved data using 
          reject('Data not available');
        }
      }, 2000);
    });
  }
  
  // Usage:
  fetchData()//.then() and catch errors using .catch().
    .then((data) => {
      console.log('Received data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    // //Example 2
    // function getUser(id) {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         const users = {
    //           1: { id: 1, name: 'Eric' },
    //           2: { id: 2, name: 'Hazel' },
    //           3: { id: 3, name: 'Jayden' }
    //         };
    //         const user = users[id];
    //         if (user) {
    //           resolve(user);
    //         } else {
    //           reject('User not found');
    //         }
    //       }, 2000);
    //     });
    //   }
      
    //   function getUserPosts(user) {
    //     return new Promise
    //   }
const numbers = [46, 21, 16, 5, 14, 7, 6, 11, 12, 98, 3, 38, 53];

const filteredNumbers = numbers.filter((number) => {
  return number % 3 === 0 && number % 6 === 0 && number % 9 !== 0;
});

console.log(filteredNumbers);

//filter method takes a callback function that is executed for each element in the array. The callback function returns true for elements that meet the specified criteria, and those elements are included in the resulting filtered array
//the callback function checks if a number is divisible by both 3 and 6 using the modulo operator (%). 
//We use the conditions number % 3 === 0 and number % 6 === 0 to ensure that the number is divisible by both 3 and 6.
//we include another condition number % 9 !== 0 to exclude numbers that are divisible by 9. This ensures that the resulting array only contains numbers divisible by both 3 and 6 but not by 9.



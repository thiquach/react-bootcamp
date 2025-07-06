var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers1 = numbers.map((x) => x * 2);
console.log(newNumbers1);

//Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter((x) => x > 10);
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumbers3 = numbers.reduce(function reduce(accumulator, currentNum) {
  return accumulator + currentNum;
});
console.log(newNumbers3);

//Find - find the first item that matches from an array.
const newNumbers4 = numbers.find((x) => x > 10);
console.log(newNumbers4);

//FindIndex - find the index of the first item that matches.
const newNumbers5 = numbers.findIndex((x) => x > 10);
console.log(newNumbers5);

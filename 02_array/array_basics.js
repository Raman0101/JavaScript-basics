// Basics of array in JavaScript


const myarray = [1,2,3,4,5];
const myArr = [1, "Raman", true];

const arr = new Array(1,2,3,4,5);

console.log(myArr[1]);

// Arrray Methods

myArr.push(6);

myArr.pop();

// myArr.unshift(0); add element at the start, but not oreferred as it decreases performance

// .includes(9)  .indexOf(3)   .join() --> add elements of array and convert to string

const newArr = [1,2,3,4,6];

const n1 = newArr.slice(0, 3);
console.log(`Sliced Array: ${n1}`);
console.log(`Original Array: ${newArr}`);

const n2 = newArr.splice(0, 3);
console.log(`Spliced Array: ${n2}`);
console.log(`Original Array: ${newArr}`);

// The difference between slice and splice is that 
//  1. Spliced array includes the whole range. 
//  2. Splice Remove that portion from the original array.

console.log(myArr);

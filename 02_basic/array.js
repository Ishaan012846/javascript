// array

const myArr = [0, 1, 2, 3, 4, 5]// can also have "hitesh", true in this array SAME DATATYPE NOT COMPULSARY in whole array; RESIZABLE 
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add element in array 
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //inserted in array's start at the first position
// myArr.shift() // removes the element added using the unshift method

// console.log(myArr.includes(9)); // boolean , element there or not present
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// 16th june 
// arrays can take different datatypes as input 

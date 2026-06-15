// String joining
let str1 = "Hello";
let str2 = "50";
let joinedStr = str1 + " " + str2; // Using concatenation
//console.log(joinedStr); // Output: Hello 50
//avoid using concatenation, use template literals instead

// remember to use backticks ` ` for template literals
console.log(`hello my name is ${str1} and my repo count is ${str2}`); // Output: hello my name is Hello and my repo count is 50
// Using template literals
let templateStr = `${str1} ${str2}`;
console.log(templateStr); // Output: Hello 50

// Using Array join method
let arr = [str1, str2];
let joinedArrStr = arr.join(" ");
console.log(joinedArrStr); // Output: Hello 50       


const gamename= new String ("hitesh-hc-com")
//console.log(gamename[0]); // Output: h
//console.log(gamename.length); // Output: 15
//console.log(gamename.toUpperCase()); // Output: HITESH-HC-COM
//console.log(gamename.toLowerCase()); // Output: hitesh-hc-com 
//console.log(gamename.includes("hc")); // Output: true
//console.log(gamename.startsWith("hitesh")); // Output: true
//console.log(gamename.endsWith("com")); // Output: true
//console.log(gamename.indexOf("h")); // Output: 0
//console.log(gamename.lastIndexOf("h")); // Output: 6
//console.log(gamename.slice(0, 5)); // Output: hites => if function can use -ve index then it will count from the end of the string
//console.log(gamename.substring(0, 5)); // Output: hites
//console.log(gamename.replace("hitesh", "Hitesh")); // Output: Hitesh-hc-com
//console.log(gamename.split("-")); // Output: [ 'hitesh', 'hc', 'com' ]    


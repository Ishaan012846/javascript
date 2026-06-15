/*
const score=400
console.log(score)// output => 400

const num=new Number(100)// using new keyword
console.log(num)// output=> [Number: 100]
//using functions to create num => we gt access to some functions

console.log(num.toString().length)// 3

console.log(num.toFixed(1));//n digits after the decimal point n=12.355 o/p=>12.3

const another_number=123.456287;
console.log(another_number.toPrecision(4))// 123.5
//n significant digits (total meaningful digits), not just digits after the decimal



const hundred = 1000000
console.log(hundred.toLocaleString());//1,000,000 gives num in international format
console.log(hundred.toLocaleString('en-IN'))// 10,00,000 changes number to indian type formate

//************** Maths ***************** */

//console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()) //returns a random value between 0 & 1 
console.log(Math.random()*10)// random value between 0 to 9 in decimals
console.log(Math.random()*10+1)// random value between 1 to 10 in decimal
console.log(Math.floor(Math.random()*10)+1)// random value between 1 to 10 whole number

//to get the random number in a range *IMP*

const max=100
const min=90
// *****IMPORTANT LINE *********//
console.log(Math.floor(Math.random()*(max - min + 1)) + min) 







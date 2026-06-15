// primitive and non primitive
//primitive 7 types- string,number,boolean,null,undefined,Symbol,BigInt
//copy of the memory is given not the value by refernece 


//dymanic or static?

// non-primitive(reference) Array,Object,functions

const score=100
const scoreValue=100.3

const isLoggedIn= false 
const outsideTemp=null


let userEmail;// value undefined
const anotherId=Symbol('123')
const id= Symbol("123")
console.log(id===anotherId) // false (not equal)

const bigNumber = 2355645526546565656n

const heros = ["shaktiman","ironman","superman"] //returns typeof=> 'function'
console.log(typeof heros);



//**********************************************************
 


/*                  STACK(Primitive) , HEAP(Non-Primitive)*/
let myinsta="allaboutishaan"

let anotherinsta=myinsta
anotherinsta= 'youy544'

console.log(myinsta)
console.log(anotherinsta)
  
let userOne={
    email: "gupta@google.com",
    upi: "5255@ybl"
}
let userTwo=userOne
userTwo.email="Ishaan@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
// Primitive(call by value)- string,no,boolean,null,undefined,symbol(makevalueunique),BigInt
// webevents and obj mastery
// non-primitive(refernce)- arrays,objects,functions 
// never define values in JS

const score = 100
const scoreValue = 100.3
const isloggedIn = false //boolean
const outsideTemp = null 
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 87003833783773743793n
// [arrays], {objects-DT can be any}, funct(var)- (){}
const heros = ["Iron man", "Spiderman", "Batman"];
{
    name: "kirtika";
    age: 20;
}

const myFunction = function(){
    console.log("hellokitts");
}
console.log(typeof anotherId);

// var x;
// x= 10;
// let x;
// x = 10;
// x = 10_1020_30;
// console.log(typeof(x)); // number

// x = 10.5;
// console.log(typeof(x));// number

// x = "Abishan";
// console.log(typeof(x));// string

// x = true;
// console.log(typeof(x));// boolean

// y = {};
// console.log(typeof(y));// object

// a = [];
// console.log(typeof(a));// object

// let b = null;
// console.log(typeof(b));// object

// let c = function () { };
// console.log(typeof(c));// function

// let d = undefined;
// console.log(typeof(d));// undefined

// let e = 2049n;
// console.log(typeof(e));// bigint

// let f = Symbol('5');
// console.log(typeof(f));// symbol

var x = 10;
var y = "10";

console.log(x == y);//consider only value //output true
console.log(x === y);//consider value and data type //output false
console.log(x === Number(y));//type casting to number //output true
console.log(String(x) === y);//type casting to string //output true

console.log(x != y);//consider only value //output false
console.log(x !== y);//consider value and data type //output true
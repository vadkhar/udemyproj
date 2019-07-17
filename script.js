'use strict';



var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);

//alert("Hello World!");

//let answer = confirm("Are you here?");

//console.log(answer);

let answer = prompt("Есть ли Вам 18?", "Да");
console.log(typeof(null));

let incr = 10,
decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2"===2);

let inChecked = false,
isClose = false;
console.log(inChecked || isClose);


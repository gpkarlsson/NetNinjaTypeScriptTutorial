// explicit types
var character;
var age;
var isLoggedIn;
//init variable but don't give value, but require it to be a string
age = 30;
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas.push('john');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(10);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
ninjaOne = [];
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 42,
    beltColor: 'black'
};

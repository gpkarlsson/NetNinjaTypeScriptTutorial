"use strict";
let greet;
// greet = 'hello'
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c = 10) => {
    //optional params always at the end
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);

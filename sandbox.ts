// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;
//init variable but don't give value, but require it to be a string

age = 30;

isLoggedIn = true;

// arrays

let ninjas:string[] = [];

ninjas.push('john');


// union types

let mixed: (string|number|boolean)[] = [];

mixed.push('hello');
mixed.push(10);
mixed.push(false);

console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = {
    name: 'yoshi',
    age: 30
};

ninjaOne = [];

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = {
    name: 'mario',
    age: 42,
    beltColor: 'black'
};


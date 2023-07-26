//arrays
var names = ['luigi', 'mario', 'yoshi'];
//declare array w one type, can only have that one type
names.push('toad');
var numbers = [10, 20, 30, 40];
numbers.push(25);
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
//once we've defined object, can't add properties to it
ninja.age = 40;
ninja.name = 'ryu';
//if instantiating new object with same name, properties have to be the same as the original object

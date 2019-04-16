'use strict';

function square(x) {
    return x * x;
};
console.log(square(3));

// regular arrow func
// const squareArrow = (x) => 
// {
//     return x * x;
// };

// express arrow func
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(9));

var firstName = void 0;
var getFirstName = function getFirstName(fullName) {
    firstName = fullName.split(' ')[0];
    return firstName;
};
console.log(getFirstName('Eezy DoesIt'));

var lastName = void 0;
var getLastName = function getLastName(fullName) {
    return lastName = fullName.split(' ')[1];
};
console.log(getLastName('Lem Peezy'));

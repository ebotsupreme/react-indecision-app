'use strict';

// arguments object - no long bound w arrow functions
var add = function add(a, b) {
    // console.log(arguments);

    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound
var user = {
    name: 'Eddie',
    cities: ['Los Angeles', 'Walnut', 'Glendale'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    // numbers - array of numbers 
    numbers: [3, 6, 9],
    // multiplyBy - single number
    multiplyBy: 3,
    //multiply - return a new array where the numbers have been multiplied
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());

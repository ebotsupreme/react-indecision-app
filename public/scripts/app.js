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

        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();

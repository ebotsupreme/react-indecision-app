// arguments object - no long bound w arrow functions
const add = (a, b) => {
    // console.log(arguments);

    return a + b;
};
console.log(add(55, 1));


// this keyword - no longer bound
const user = {
    name: 'Eddie',
    cities: ['Los Angeles', 'Walnut', 'Glendale'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    // numbers - array of numbers 
    numbers: [3, 6, 9],
    // multiplyBy - single number
    multiplyBy: 3,
    //multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());

function square (x) 
{
    return x * x;
};
console.log(square(3));

// regular arrow func
// const squareArrow = (x) => 
// {
//     return x * x;
// };

// express arrow func
const squareArrow = (x) => x * x;
console.log(squareArrow(9));

let firstName;
const getFirstName = (fullName) => {
    firstName = fullName.split(' ')[0];
    return firstName;
}
console.log(getFirstName('Eezy DoesIt'));

let lastName;
const getLastName = (fullName) => lastName = fullName.split(' ')[1];
console.log(getLastName('Lem Peezy'));
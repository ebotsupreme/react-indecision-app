console.log('person.js is running');
const isAdult = (x) =>  x >= 18;
const canDrink = (x) =>  x >= 21;
const isSenior = (age) =>  age >= 65;


export { isAdult, canDrink, isSenior as default }

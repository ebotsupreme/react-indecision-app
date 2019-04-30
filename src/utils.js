
console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;

// only can have 0 or 1 default export
// export { square, add, subtract as default };
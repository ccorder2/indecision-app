console.log('utils.js is running!');

// named exports
export const square = x => x * x;
export const add = (a, b) => a + b;
//const subtract = (a, b) => a - b;
//export default subtract;
export default (a, b) => a - b;
// there can be 0 or 1 default export
// on import the default export name can be anything we want
// export { square, add, subtract as default };

// exports - default export - named exports
// module.exports(square);

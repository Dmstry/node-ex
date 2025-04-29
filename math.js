// const sum = (a, b) => a + b;
// const mult = (a, b) => a * b;

// 1 export default sum
// module.exports = sum;

// 2 named export
// 2.1 export {sum}
module.exports = { sum: 2, mult: 10, pi: 3.14 };

// 2.2 export const sum = (a, b) => a + b;
// export const mult = (a, b) => a * b;

module.exports.sum = (a, b) => a + b;
module.exports.mult = (a, b) => a * b;

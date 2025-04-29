// default import
// import sum from './math';
// const sum = require("./math");

// console.log("module :>> ", require("./math"));

// console.log("sum(3,4) :>> ", sum(3, 4));

// named import
// import * as Math from './math';
const Math = require("./math");
// console.log('Math :>> ', Math);

console.log("Math.sum(1, 2) :>> ", Math.sum(1, 2));
console.log("Math.mult(2,3) :>> ", Math.mult(2, 3));

// import { sum } from './math';
const { sum, mult, some } = require("./math");

console.log("sum(2,3) :>> ", sum(2, 3));
console.log("mult(3,3) :>> ", mult(3, 3));

console.log("Math :>> ", Math);

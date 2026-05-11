const helpers = require("./utils/helpers.js");

// Task - 2

console.log(helpers.greet("Mohammad"));

console.log(helpers.calculateAge(1998));

console.log(helpers.formatCurrency(200));

// Destructuring

const { greet, calculateAge, formatCurrency } = require("./utils/helpers.js");

console.log(greet("Sam"));

console.log(calculateAge(2000));

console.log(formatCurrency(1000));

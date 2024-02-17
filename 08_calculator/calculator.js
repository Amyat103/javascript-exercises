const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if (arr === null) {
    return 0;
  }
  let sum = 0;
  arr.forEach(item => {
    sum += item;
  })
  return sum;
};

const multiply = function(arr) {
  if (arr === null) {
    return 0;
  }
  let sum = 1;
  arr.forEach(item => {
    sum *= item;
  })
  return sum;
};

const power = function(a, b) {
  let sum = 1;
  for (let i = 0; i < b; i++) {
    sum *= a;
  }
  return sum;
};

const factorial = function(a) {
  let sum = 1;
  for (let i = 1; i <= a; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

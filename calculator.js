function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

// New function to calculate the square root of a number
function sqrt(value) {
  if (value < 0) {
      throw new Error('Cannot calculate the square root of a negative number.');
  }
  return Math.sqrt(value);
}

// New function to calculate modulus
function modulus(a, b) {
  return a % b;
}

function calculateCompoundInterest(P, r, n, t) {
  const ratePerPeriod = divide(r, n);
  const compoundFactor = exponentiate(add(1, ratePerPeriod), multiply(n, t));
  return multiply(P, compoundFactor);
}
function calculatePercentage(value, percentage) {
  return (value * percentage) / 100;
}


module.exports = { add, subtract, multiply, divide, exponentiate, sqrt, modulus, calculateCompoundInterest, calculatePercentage };

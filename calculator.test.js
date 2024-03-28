const { add, subtract, multiply, divide, exponentiate, sqrt, modulus, calculatePercentage } = require('./calculator');

// Test suite for 'add' function
describe('Add', () => {
    const testData = [
        [1, 2, 3], // Original test case
        [0, 0, 0], // Adding zeros
        [-1, -1, -2], // Adding negative numbers
        [100, 200, 300], // Adding large numbers
    ];

    describe.each(testData)('add(%i, %i)', (a, b, expected) => {
        test(`should return ${expected}`, () => {
            expect(add(a, b)).toBe(expected);
        });
    });
});

// Test suite for 'subtract' function
describe('Subtract', () => {
    const testData = [
        [2, 1, 1], // Original test case
        [0, 0, 0], // Subtracting zeros
        [-2, -1, -1], // Subtracting negative numbers
        [200, 100, 100], // Subtracting large numbers
    ];

    describe.each(testData)('subtract(%i, %i)', (a, b, expected) => {
        test(`should return ${expected}`, () => {
            expect(subtract(a, b)).toBe(expected);
        });
    });
});

// Test suite for 'multiply' function
describe('Multiply', () => {
    const testData = [
        [2, 3, 6], // Original test case
        [0, 10, 0], // Multiplying by zero
        [-2, 3, -6], // Multiplying with a negative number
        [100, 200, 20000], // Multiplying large numbers
    ];

    describe.each(testData)('multiply(%i, %i)', (a, b, expected) => {
        test(`should return ${expected}`, () => {
            expect(multiply(a, b)).toBe(expected);
        });
    });
});

// Test suite for 'divide' function
describe('Divide', () => {
    const testData = [
        [10, 2, 5], // Original test case
        [10, 5, 2], // Dividing evenly
        [-10, 2, -5], // Dividing negative numbers
        [1, 2, 0.5], // Result is a fraction
    ];

    describe.each(testData)('divide(%i, %i)', (a, b, expected) => {
        test(`should return ${expected}`, () => {
            expect(divide(a, b)).toBe(expected);
        });
    });
});

// Test suite for 'exponentiate' function
describe('Exponentiate', () => {
    const testData = [
        [2, 3, 8], // Original test case
        [5, 0, 1], // Any number to the power of 0
        [2, -2, 0.25], // Exponentiating with a negative exponent
        [10, 2, 100], // Large base, small exponent
    ];

    describe.each(testData)('exponentiate(%i, %i)', (base, exponent, expected) => {
        test(`should return ${expected}`, () => {
            expect(exponentiate(base, exponent)).toBe(expected);
        });
    });
});

// Test suite for 'sqrt' function
describe('Sqrt', () => {
    const testData = [
        [4, 2], // Original test case
        [9, 3], // Square root of 9
        [16, 4], // Square root of 16
        [1, 1], // Square root of 1
    ];

    describe.each(testData)('sqrt(%i)', (a, expected) => {
        test(`should return ${expected}`, () => {
            expect(sqrt(a)).toBe(expected);
        });
    });
});

// Test suite for 'modulus' function
describe('Modulus', () => {
    const testData = [
        [10, 3, 1], // Original test case
        [12, 5, 2], // Another modulus calculation
        [20, 6, 2], // Yet another modulus calculation
        [5, 2, 1], // Modulus resulting in 1
    ];

    describe.each(testData)('modulus(%i, %i)', (a, b, expected) => {
        test(`should return ${expected}`, () => {
            expect(modulus(a, b)).toBe(expected);
        });
    });
});

// Test suite for 'calculatePercentage' function
describe('Calculate Percentage', () => {
  const testData = [
      [100, 10, 10], // 10% of 100
      [50, 20, 10], // 20% of 50
      [200, 15, 30], // 15% of 200
      [100, 100, 100], // 100% of 100
      [0, 30, 0], // 30% of 0
      [75, 0, 0], // 0% of 75
  ];

  describe.each(testData)('calculatePercentage(%i, %i)', (value, percentage, expected) => {
      test(`should return ${expected}`, () => {
          expect(calculatePercentage(value, percentage)).toBe(expected);
      });
  });
});

const { calculateCompoundInterest } = require('./calculator'); 

describe('Compound Interest Calculation Integration Tests', () => {
  test('Correctly calculates compound interest for annual compounding', () => {
    const P = 1000; // Principal amount
    const r = 0.05; // Annual interest rate (5%)
    const n = 1; // Compounded once per year
    const t = 10; // Time in years
    const expectedAmount = 1628.89; // Expected amount after 10 years

    // Rounding to two decimal places as currency is typically represented
    const calculatedAmount = parseFloat(calculateCompoundInterest(P, r, n, t).toFixed(2));
    expect(calculatedAmount).toBe(expectedAmount);
  });

  test('Correctly calculates compound interest for quarterly compounding', () => {
    const P = 1000;
    const r = 0.05;
    const n = 4; // Compounded quarterly
    const t = 10;
    const expectedAmount = 1643.62; // Accurate expected amount after recalculation

    // Rounding to two decimal places as currency is typically represented
    const calculatedAmount = parseFloat(calculateCompoundInterest(P, r, n, t).toFixed(2));
    expect(calculatedAmount).toBe(expectedAmount);
  });

  test('Correctly calculates compound interest for monthly compounding', () => {
    const P = 1000;
    const r = 0.05;
    const n = 12; // Compounded monthly
    const t = 10;
    const expectedAmount = 1647.01; // Accurate expected amount after recalculation

    // Rounding to two decimal places as currency is typically represented
    const calculatedAmount = parseFloat(calculateCompoundInterest(P, r, n, t).toFixed(2));
    expect(calculatedAmount).toBe(expectedAmount);
  });
});

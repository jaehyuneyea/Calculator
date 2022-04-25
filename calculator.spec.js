const Calculator = require('./calculator');

require('./calculator.js');

describe('calculator', () => {
  const calculator = new Calculator;

  test('addition works', () => {
    expect(calculator.add(1,1)).toBe(2);
  });
})

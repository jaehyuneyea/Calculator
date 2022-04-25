const calculator = require('./script');

describe('calculator', () => {
  test('addition works', () => {
    expect(add(1,1)).toBe(2);
  });
})
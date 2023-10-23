const calculator = require('./calculator');

describe('Calculator', () => {
  it('should add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  it('should multiply two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  it('should divide two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  it('should handle division by zero', () => {
    expect(calculator.divide(5, 0)).toBe('Cannot divide by zero');
  });
});

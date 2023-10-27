const analyzeArray = require('./analyzeArray');

describe('Analyze Array', () => {
  it('Checks if arg passes is array', () => {
    expect(analyzeArray([1, 2])).toBe(null)
  });
  
});
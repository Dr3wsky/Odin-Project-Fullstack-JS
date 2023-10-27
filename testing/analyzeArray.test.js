const analyzeArray = require('./analyzeArray');

console.log(analyzeArray([5, 3, 15]))

  test('Checks if arg passes is array', () => {
    expect(analyzeArray(5)).toBe('Pass an array argument')
  });

  test('Accepts only numbers in array', () => {
    expect(analyzeArray([5, 3, 's'])).toBe('Array includes non-numbers')
  });

  test('Calculates average', () => {
    expect(analyzeArray([4, 4, 4, 4]).average).toBe(4)
  });

  test('Returns length', () => {
    expect(analyzeArray([1, 1, 1, 1, 1, 1, 1 ,1]).len).toBe(8)
  });

  test('Calculates maximum', () => {
    expect(analyzeArray([2, 5, 10, 5]).max).toBe(10)
  })

  test('Calculates minimum', () => {
    expect(analyzeArray([2, 5, 10, 5]).min).toBe(2)
  })


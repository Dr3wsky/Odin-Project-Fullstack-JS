const reverseString = require('./reverseString');

test('String intake only', () => 
    expect(reverseString(8)).toBeNull());

test('Base case string reverse', () => 
    expect(reverseString('hello')).toBe('olleh'));

test('With capitals', () => 
    expect(reverseString('Hello')).toBe('olleH'));

test('With spaces and special chars', () => 
    expect(reverseString('Hello _ Mr. ')).toBe(' .rM _ olleH'));
const capitalize = require('./capitalize');

test('String intake only', () => 
    expect(capitalize(8)).toBeNull());

test('Capitalize 1st letter', () => 
    expect(capitalize('hello')).toBe('Hello'));

test('Start with capitals', () => 
    expect(capitalize('WHOOPS')).toBe('Whoops'));

test('Multiple words', () => 
    expect(capitalize('hello world')).toBe('Hello World'))

test('Mixmatched with special characters', () => 
    expect(capitalize('MY naMe_ is')).toBe('My Name_ Is'))
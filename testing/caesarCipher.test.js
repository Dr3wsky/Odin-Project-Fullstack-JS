const cipher = require('./caesarCipher');


describe('Caesar Cipher ', () => {
  it('encrypts single words', () => {
    expect(cipher.encrypt('hello', 29)).toBe('khoor');
  });

    it('decrypts single words', () => {
    expect(cipher.decrypt('khoor', 3)).toBe('hello');
  });

  it('Handles alphabet wraparouds', () => {
    expect(cipher.encrypt('zoom', 20)).toBe('tiig')
  })

  it('Keeps capitalization', () => {
    expect(cipher.encrypt('HeLLo', 3)).toBe('KhOOr');
  });

  it('Ignores special characters', () => {
    expect(cipher.encrypt('Man_ lin.XSS', 5)).toBe('Rfs_ qns.CXX');
  })

  it('Handles all possibilities and complex decryption', () => {
    expect(cipher.decrypt('Man_ lin.XSS', 25)).toBe('Nbo_ mjo.YTT'); 
  })

});
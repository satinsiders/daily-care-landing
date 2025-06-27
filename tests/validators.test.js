const { isValidEmail, isValidPhone } = require('../utils/validators');

describe('validators', () => {
  test('valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  test('invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  test('valid phone', () => {
    expect(isValidPhone('+12345678901')).toBe(true);
  });

  test('invalid phone', () => {
    expect(isValidPhone('abc123')).toBe(false);
  });
});

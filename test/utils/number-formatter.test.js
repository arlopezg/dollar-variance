import numberFormatter from '~/utils/formatting/number-formatter';

describe('Number formatter', () => {
  it('Should be a function', () => {
    expect(typeof numberFormatter).toBe('function');
  });
  it('Should convert plain numbers to thousand-separated', () => {
    const value = 1000;
    const options = { language: 'en-US' };

    expect(numberFormatter(value, options)).toBe('1,000');
  });
});

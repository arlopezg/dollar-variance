import diffCalculator from '~/utils/formatting/diff-calculator';

describe('Difference calculator for currencies', () => {
  const values = [1, 2, 5, 10, -10];
  it('Should be a function', () => {
    expect(typeof diffCalculator).toBe('function');
  });
  it('Should only allow numeric values', () => {
    const invalidValues = [...values, undefined, null];

    expect(() => diffCalculator(values)).not.toThrow();
    expect(() => diffCalculator(invalidValues)).toThrow();
  });
  it('Should return the difference between a series of numbers', () => {
    const expectedDiff = [0, 1, 3, 5, -20].map((item) => item.toFixed(2));
    expect(diffCalculator(values)).toStrictEqual(expectedDiff);
  });
});

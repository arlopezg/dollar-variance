import requiredParam from '~/utils/validation/required-param';

describe('Required Params', () => {
  it('Should be a function', () => {
    expect(typeof requiredParam).toBe('function');
  });
  it('Should throw an error when a required param is not received', () => {
    const MISSING_PARAM = 'A required param is missing';
    const testFn = (name = requiredParam()) => name;

    expect(() => testFn('Foo')).not.toThrow();
    expect(() => testFn(undefined)).toThrow(MISSING_PARAM);
  });
  it('Should indicate a missing param name when specified', () => {
    const namedParamFn = (name = requiredParam('name')) => name;

    expect(() => namedParamFn(undefined)).toThrow(`Param "name" is missing`);
  });
});

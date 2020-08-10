import DateService from '~/services/DateService';

describe('DateService', () => {
  it('Should not allow start year to be less than end year', () => {
    expect(() => DateService.getYearRange(2000, 1999)).toThrow();
    expect(() => DateService.getYearRange(1999, 2000)).not.toThrow();
  });
  it('Should retrieve the last years in a range', () => {
    const range = DateService.getYearRange(2000, 2005);

    expect(range).toStrictEqual([2000, 2001, 2002, 2003, 2004, 2005]);
  });
});

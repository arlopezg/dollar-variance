export default {
  getYearRange(start = 1999, end = new Date().getFullYear()) {
    if (isNaN(start) || isNaN(end)) {
      throw new Error('Years must be numeric');
    }

    if (start < 1999) {
      throw new Error('Start year cannot be past 1999');
    }

    if (end <= start) {
      throw new Error('End year cannot be lesser nor equal to start year');
    }

    let years = [];

    for (let year = start; year <= end; year++) {
      years = [...years, year];
    }

    return years;
  }
};

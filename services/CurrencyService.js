import axios from 'axios';
import API from './Api';
import requiredParam from '~/utils/validation/required-param';
import DateService from './DateService';
import sequentialPromises from '~/utils/timing/sequential-promises';

export default {
  /**
   * @function getCurrenciesState
   * @description Retrieves all available currencies' current state
   * (name, code, price in CLP, update time & other values)
   * @return {Promise<Object>} Current state.
   */
  async getCurrenciesState() {
    try {
      const response = await axios.get(API.baseURL);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * @function getValuesFromLastMonth
   * @description Retrieves a currency's latest 30 values
   * @return {Promise<Object>} Currency's prices (CLP, %, etc.).
   */
  async getValuesFromLastMonth(currency = 'dolar') {
    try {
      const response = await axios.get(`${API.baseURL}/${currency}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * @function getValuesFromYears
   * @description Retrieves a currency's values from a specific year
   * If `year` is still in progress, the API returns the values from year-to-date
   * @return {Promise<Object>} Currency's prices (CLP, %, etc.).
   */
  async getValuesFromYear(currency = 'dolar', year = new Date().getFullYear()) {
    try {
      const response = await axios.get(`${API.baseURL}/${currency}/${year}`);

      return response.data.serie.reverse();
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * @function getValuesFromYearsRange
   * @description Retrieves a currency's values from a series of years
   * @return {Promise<Object>} Currency's prices (CLP, %, etc.).
   */
  async getValuesFromYearRange(currency = 'dolar', range = requiredParam()) {
    const [start, end] = range;

    if (isNaN(start) || isNaN(end)) {
      throw new Error('Invalid range params');
    }

    const years = DateService.getYearRange(start, end);
    const promises = years.map((year) =>
      this.getValuesFromYear.bind(this, currency, year)
    );

    const response = await sequentialPromises(promises);
    const serie = response.flat();

    return { range, serie };
  }
};

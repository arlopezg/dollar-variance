import axios from 'axios';
import API from './Api';

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
  async getCurrencyValuesFromLastMonth(currency = 'dolar') {
    const valuesFromLastMonth = await axios.get(`${API.baseURL}/${currency}`);
    return valuesFromLastMonth;
  },
  async getCurrencyValuesFromYear(
    currency = 'dolar',
    year = new Date().getFullYear()
  ) {
    try {
      const valuesFromYear = await axios.get(
        `${API.baseURL}/${currency}/${year}`
      );

      return valuesFromYear;
    } catch (error) {
      throw new Error(error);
    }
  }
};

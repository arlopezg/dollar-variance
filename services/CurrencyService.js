import axios from 'axios';
import API from './Api';

export default {
  async getCurrenciesState() {
    try {
      const response = await axios.get(API.baseURL);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getCurrencyValuesFromLastMonth(currency = 'dolar') {
    const response = await axios.get(`${API.baseURL}/${currency}`);
    return response;
  }
};

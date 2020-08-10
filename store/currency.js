import CurrencyService from '~/services/CurrencyService';

export const state = () => ({
  currencies: null,
  currency: null
});

export const getters = {};

export const mutations = {
  SET_ALL_CURRENCIES(state, payload) {
    state.currencies = payload;
  },
  SET_CURRENCY_VALUES(state, payload) {
    state.currency = payload;
  }
};

export const actions = {
  async getCurrencyValues({ commit }, currency = 'dolar') {
    const response = await CurrencyService.getValuesFromLastMonth(currency);

    const sortedResponse = { ...response, serie: response.serie.reverse() };
    commit('SET_CURRENCY_VALUES', sortedResponse);
  },
  async getAllCurrencies({ commit }) {
    const response = await CurrencyService.getCurrenciesState();
    const currencies = Object.values(response);
    const filteredCurrencies = currencies.filter(
      (currency) => typeof currency === 'object'
    );
    commit('SET_ALL_CURRENCIES', filteredCurrencies);
  },
  async getValuesFromYears({ commit }, yearRange = []) {
    const [start, end] = yearRange;
    if (start && !end) {
      const singleYear = await CurrencyService.getValuesFromYear(
        'dolar',
        start
      );
      commit('SET_CURRENCY_VALUES', { serie: singleYear.flat() });
      return singleYear;
    }

    const range = await CurrencyService.getValuesFromYearRange(
      'dolar',
      yearRange
    );

    commit('SET_CURRENCY_VALUES', range);
    return range;
  }
};

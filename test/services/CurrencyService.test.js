import axios from 'axios';

import CurrencyService from '~/services/CurrencyService';

jest.mock('axios');

describe('CurrencyService', () => {
  it('Should throw an error when connection fails', async () => {
    const NETWORK_ERROR = 'Network error';

    axios.get.mockRejectedValue(new Error(NETWORK_ERROR));

    await expect(CurrencyService.getCurrenciesState()).rejects.toThrow(
      NETWORK_ERROR
    );
  });
  it('Should return all currencies actual state', async () => {
    expect.assertions(2);

    const data = {
      data: {
        dolar: { valor: 123 },
        uf: { valor: 123 },
        ipc: { valor: 123 }
      }
    };

    axios.get.mockResolvedValue(data);
    const response = await CurrencyService.getCurrenciesState();

    expect(response.dolar.valor).toBe(123);
    expect(response.uf.valor).toBe(123);
  });
  it(`Should return USD last month's values`, async () => {
    expect.assertions(2);

    const data = {
      codigo: 'dolar',
      unidad_medida: 'Pesos',
      serie: [{ valor: 123 }, { valor: 456 }, { valor: 789 }]
    };

    axios.get.mockResolvedValue(data);
    const response = await CurrencyService.getCurrencyValuesFromLastMonth('');

    expect(response.codigo).toBe('dolar');
    expect(Array.isArray(response.serie)).toBe(true);
  });
  it('Should only retrieve the specified currency', async () => {
    const currencyResponseGenerator = (currency = '') => ({ codigo: currency });

    const ufResponse = await CurrencyService.getCurrencyValuesFromLastMonth(
      'uf'
    );
  });
});

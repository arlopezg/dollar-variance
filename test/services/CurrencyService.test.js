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
  it('Should retrieve all currencies actual state', async () => {
    expect.assertions(2);

    const data = {
      data: {
        dolar: { valor: 123 },
        uf: { valor: 123 },
        ipc: { valor: 123 }
      }
    };

    axios.get.mockResolvedValue(data);
    const currentState = await CurrencyService.getCurrenciesState();

    expect(currentState.dolar.valor).toBe(123);
    expect(currentState.uf.valor).toBe(123);
  });
  it(`Should retrieve USD last month's values`, async () => {
    expect.assertions(2);

    const data = {
      codigo: 'dolar',
      unidad_medida: 'Pesos',
      serie: [{ valor: 123 }, { valor: 456 }, { valor: 789 }]
    };

    axios.get.mockResolvedValue(data);
    const valuesFromLastMonth = await CurrencyService.getCurrencyValuesFromLastMonth(
      ''
    );

    expect(valuesFromLastMonth.codigo).toBe('dolar');
    expect(Array.isArray(valuesFromLastMonth.serie)).toBe(true);
  });
  it('Should retrieve currency values for a specific year', async () => {
    axios.get.mockResolvedValue([]);

    const valuesFromYear = await CurrencyService.getCurrencyValuesFromYear(
      2020
    );
  });
  it('Should only retrieve the specified currency', async () => {
    expect.assertions(4);

    const currencyResponseGenerator = (currency = '') => ({ codigo: currency });

    axios.get
      .mockResolvedValueOnce(currencyResponseGenerator('uf'))
      .mockResolvedValueOnce(currencyResponseGenerator('dolar'));

    const ufValues = await CurrencyService.getCurrencyValuesFromLastMonth('uf');
    const dolarValues = await CurrencyService.getCurrencyValuesFromLastMonth(
      'dolar'
    );

    expect(ufValues.codigo).toBe('uf');
    expect(ufValues.codigo).not.toBe('dolar');
    expect(dolarValues.codigo).toBe('dolar');
    expect(dolarValues.codigo).not.toBe('uf');
  });
});

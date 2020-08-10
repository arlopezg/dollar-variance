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

    const expectedResponse = {
      data: {
        codigo: 'dolar',
        unidad_medida: 'Pesos',
        serie: [{ valor: 123 }, { valor: 456 }, { valor: 789 }]
      }
    };

    axios.get.mockResolvedValue(expectedResponse);

    const response = await CurrencyService.getValuesFromLastMonth('dolar');

    expect(response.codigo).toBe('dolar');
    expect(Array.isArray(response.serie)).toBe(true);
  });
  it('Should throw an error when requesting an invalid currency', async () => {
    axios.get.mockRejectedValueOnce(new Error(500));

    await expect(
      CurrencyService.getValuesFromLastMonth('simoleon')
    ).rejects.toThrow();
  });

  describe('Requesting year ranges', () => {
    it('Should throw on missing range values', async () => {
      await expect(
        CurrencyService.getValuesFromYearRange('dolar', [1000, undefined])
      ).rejects.toThrow();
    });
    it('Should retrieve all values from a range', async () => {
      const currency = 'dollar';
      const range = [2000, 2002];

      const serie1 = [{ valor: 123 }, { valor: 345 }];
      const serie2 = [{ valor: 456 }, { valor: 678 }];
      const serie3 = [{ valor: 100 }, { valor: 200 }];

      const expectedResponse = {
        range,
        serie: [...serie1, ...serie2, ...serie3]
      };

      axios.get.mockResolvedValue(expectedResponse);

      const response = await CurrencyService.getValuesFromYearRange(
        currency,
        range
      );

      expect(response.range).toBe(expectedResponse.range);
      expect(response.serie).toBe(expectedResponse.serie);
    });
  });
});

import API from '~/services/Api';

describe('ApiService', () => {
  test('It is a valid configuration object', () => {
    expect(typeof API).toBe('object');
  });
  test('It routes to Mindicador.cl API', () => {
    const hasCorrectGetway = API.baseURL.includes('mindicador.cl/api');
    expect(hasCorrectGetway).toBeTruthy();
  });
});

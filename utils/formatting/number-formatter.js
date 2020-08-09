import requiredParam from '../validation/required-param';

export default function (value = requiredParam(), params = {}) {
  if (!navigator) {
    throw new Error('Only available in browsers');
  }

  const defaultOptions = {
    language: navigator?.language || 'es-ES',
    maximumSignificantDigits: 2
  };

  const options = { ...defaultOptions, ...params };

  console.log(options);
  return Intl.NumberFormat(options.language, options).format(value);
}

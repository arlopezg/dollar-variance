import requiredParam from '~/utils/validation/required-param';

export default function (value = requiredParam(), params = {}) {
  if (!navigator) {
    throw new Error('Only available in browsers');
  }

  const defaultOptions = {
    language: navigator.language,
    minimumSignificantDigits: 1,
    maximumFractionDigits: 2
  };

  const options = { ...defaultOptions, ...params };

  return new Intl.NumberFormat(options.language, options).format(value);
}

import numberFormatter from '~/utils/formatting/number-formatter';

export default function (values = []) {
  const hasInvalidValues = values.some((value) => typeof value !== 'number');

  if (hasInvalidValues) {
    throw new Error('Every value must be a number');
  }

  const variance = values.reduce((total, current, curIndex, items) => {
    let prev = items[curIndex - 1];

    if (prev === undefined) {
      prev = current;
    }

    const diff = (current - prev).toFixed(1);
    total = [...total, diff];
    return total;
  }, []);

  return variance;
}

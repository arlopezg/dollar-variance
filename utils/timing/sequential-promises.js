// Referrence: https://gist.github.com/anvk/5602ec398e4fdc521e2bf9940fd90f84#gistcomment-2774447

// functions is an array of functions that return a promise.
export default async function (functions = []) {
  const results = [];

  for (const fn of functions) {
    results.push(await fn());
  }

  return results;
}

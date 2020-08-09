/**
 * @function requiredParam
 * @description Throws an error when a required param is not received
 * @usage `function (requiredValue = requiredParam(), notRequiredParam) { ... }`
 */
export default function requiredParam(paramName = '') {
  if (paramName) {
    throw new Error(`Param "${paramName}" is missing`);
  }
  throw new Error('A required param is missing');
}

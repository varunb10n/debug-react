/**
 *
 * @param value The value to check.
 * @returns {boolean} Returns `true` if `value` is null or undefined, else `false`.
 */
export const isNil = (value: any) => value === null || value === undefined;

/**
 *
 * @param value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 */
export const isObject = (value: any) => {
  const type = typeof value;
  return (
    !isNil(value) &&
    type === "object" &&
    !Array.isArray(value) &&
    !(value instanceof Function)
  );
};

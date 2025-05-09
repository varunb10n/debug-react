/**
 *
 * @param value The value to check.
 * @returns {boolean} Returns `true` if `value` is null or undefined, else `false`.
 */
const isNil = (value) => value === null || value === undefined;
/**
 *
 * @param value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 */
export const isObject = (value) => {
    const type = typeof value;
    return (!isNil(value) &&
        type === "object" &&
        !Array.isArray(value) &&
        !(value instanceof Function));
};

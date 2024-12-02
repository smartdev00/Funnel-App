/**
 * Returns a Boolean indicates whether or not value is Interger style
 *
 * @param {number | string | object | null | undefined} value The String value you want to validate whether or not value is Integer
 * @returns Returns true if value is Interger style, otherwise returns false
 */
export function isInteger(value: number | string | object | null | undefined): boolean {
  // Check for null or undefined
  if (value === null || value === undefined) {
    return false;
  }

  // Check if the value is a number
  if (typeof value === "number") {
    return Number.isInteger(value);
  }

  // Check if the value is a string that can be converted to an integer
  if (typeof value === "string") {
    const parsedValue = Number(value);
    return !isNaN(parsedValue) && Number.isInteger(parsedValue);
  }

  // If it's an object or any other type, return false
  return false;
}
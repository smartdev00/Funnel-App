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

/**
 * Check if the the parameter has non-numeric symbol
 *
 * @param text
 * @returns Returns false if it has only numeric symbols, otherwise returns true
 */
export function hasNonNumericSymbols(text: string) {
  // Regular expression to match non-numeric characters
  const nonNumericRegex = /[^0-9]/;

  // Test the text against the regular expression
  return nonNumericRegex.test(text);
}

export function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

export function isNullOrUndefined(value: any) {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return { error: true, key: value };
  }

  // Check if the value is string and ""
  if (typeof value === "string" && value === "") {
    return { error: true, key: value };
  }

  // Check if the value is an object
  if (typeof value === "object") {
    // Iterate through the properties of the object
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        // If any property is null or undefined or empty string, return true
        if (value[key] === null || value[key] === undefined || value[key] === "") {
          return { error: true, key: key };
        }
      }
    }
  }

  // If all properties are not null or undefined, return false
  // If it's not null, undefined, or an object, return false
  return { error: false };
}

export function hasError(value: any) {
  // Check if the value is null, undefined, or an empty string
  if (value === null || value === undefined || value === "") {
    return false;
  }

  if (typeof value === "string" && value.trim() === "") {
    return false;
  }

  // Check if the value is an object
  if (typeof value === "object" && value !== null) {
    // Iterate through the properties of the object
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        // If any property is not null, undefined, or an empty string, return false
        if (value[key] !== null && value[key] !== undefined && value[key] !== "") {
          return true;
        }
      }
    }
    // If all properties are null, undefined, or empty strings, return true
    return false;
  }

  // If it's not null, undefined, empty string, or an object, return false
  return false;
}

export const isValidColor = (event: string) => {
  // Validate if the input is a valid hex color
  return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(event);
};

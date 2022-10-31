/**
 * Reverses the given string or array
 * @param stringOrArray the string or array to reverse.
 */
function reverse(stringOrArray: string | any[]) {
  return typeof stringOrArray === "string"
    ? [...stringOrArray].reverse().join("")
    : stringOrArray.slice().reverse();
}

// Here, we don't now what the type of the return value is.
const reversedString = reverse("Typescript");
const reversedArray = reverse([4, 7, 15, 346, 4]);

// Below, we know that the type of the return value.
// Given string, it returns string.
// Given array, it returns array.

/**
 * Reverses the given string.
 * @param string The string to reverse.
 */
function reverseOverload(string: string): string;
/**
 * Reverses the given array.
 * @param array The array to reverse.
 */
// even more explicit with generics
function reverseOverload<T>(array: T[]): T[];
function reverseOverload(stringOrArray: string | any[]) {
  return typeof stringOrArray === "string"
    ? [...stringOrArray].reverse().join("")
    : stringOrArray.slice().reverse();
}

const reversedStringOverload = reverseOverload("Typescript");
const reversedArrayOverload = reverseOverload([4, 7, 15, 346, 4]);

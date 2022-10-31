const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]];
// flatten(numbers) === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function flatten(array: (number | number[])[]): number[] {
  const flattened: number[] = [];
  for (const element of array) {
    // This line is a typeguard.
    // isArray(arg: any): arg is any[];
    if (Array.isArray(element)) {
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}

function flattenWithGeneric<T>(array: (T | T[])[]): T[] {
  const flattened: T[] = [];
  for (const element of array) {
    // This line is a typeguard.
    // isArray(arg: any): arg is any[];
    if (Array.isArray(element)) {
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}

console.log(flattenWithGeneric(numbers));

// 'is' is called a type predicate.
function isFlat<T>(array: (T | T[])[]): array is T[] {
  return !array.some(Array.isArray);
}

// here, type of number is either number[] or number[][]
if (isFlat(numbers)) {
  // here, type of numbers is a number[]
  numbers;
}

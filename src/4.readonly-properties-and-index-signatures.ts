interface User {
  // readonly keyword is purely for TS;
  // it does not affect the JS output
  readonly id: number;
  name: string;
}

const user: User = {
  id: 42,
  name: "Kim",
};

// Make id readonly.
// user.id++;
user.name += " Wooyeong";

class UserClass {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const userInstance = new UserClass(42, "Kim");
// userInstance.id++;
userInstance.name += " Wooyeong";

// readonly with Index signatures
const weekdays: ReadonlyArray<string> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//  readonly [n: number]: T; inside of ReadonlyArray definition
// weekdays[0] = "Sun"; // Error: Cannot assign to '0' because it is a read-only property.
// weekdays.length = 0; // Error: Cannot assign to 'length' because it is a read-only property.

// ReadonlyArray exposes only non-mutating array methods:
// concat, every, filter, find, findIndex, forEach, indexOf, join, lastIndexOf, map, reduce, reduceRight, reverse, slice, some, and toLocaleString.

// All of this is only compile time enforcement.
// Nothing is enforced at runtime (JS).

type Primitive = string | number | boolean | null | undefined | symbol;

let obj: object;

// Primitive types are not assignable to object
// obj = true;
// obj = 42;
// obj = "hello";
// obj = Symbol("hello");
// obj = null;
// obj = undefined

// Complex types are just fine;
// obj = {};
// obj = [];
// obj = Math.random;

// {} is an empty object.
let objEmpty = {};

// This is different
let objUppercase: Object;

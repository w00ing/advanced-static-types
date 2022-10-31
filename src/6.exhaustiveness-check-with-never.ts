// The inferred type is never.
// "This part of the code is unreachable since it does not ever return."
const sing = function () {
  while (true) {
    console.log("lalala");
  }
};
const result = sing();

// Same thing, inferred type is never.
const singArrow = () => {
  while (true) {
    console.log("lalala");
  }
};

// However, if we use function declaration, the inferred type is void.
function singDeclaration() {
  while (true) {
    console.log("lalala");
  }
}

// void: does not return anything
const greet = function () {
  alert("Hi!");
};

// never: does not return anything and does not reach the end of the function
const fail = function () {
  throw Error();
};

// If we explicitly set the return type to never,
// We can't return anything.

function trimAndLowerCase(text: string | null) {
  if (typeof text === "string") {
    return text.trim().toLowerCase();
  }

  if (text === null) {
    return null;
  }

  // exhaustiveness check; this is unreachable
  return text;
}

enum ShirtSize {
  S,
  M,
  L,
  XL,
}

function assertNever(value: never): never {
  throw Error(`Unexpected value: '${value}'`);
}

function prettyPrint(size: ShirtSize) {
  switch (size) {
    case ShirtSize.S:
      return "small";
    case ShirtSize.M:
      return "medium";
    case ShirtSize.L:
      return "large";
    default:
    // This is an exhaustiveness check.
    // If we don't deal with every case, we'll get a compile error.
    // (XL in this case)
    // return assertNever(size);
  }
}

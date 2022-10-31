// Rest properties
const person = {
  fullName: "Wooyeong Kim",
  blog: "https://github.com",
  twitter: "@wooing",
};

const { fullName, ...socialMeadia } = person;
socialMeadia.blog;
socialMeadia.twitter;

// Spread properties
const defaultStyles = {
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal",
};

const userStyles = {
  color: "#111111",
  fontWeight: 700,
};

const styles = {
  // Order matters here.
  ...defaultStyles,
  ...userStyles,
};

// Shallow copy
const todo = {
  text: "Mow the lawn",
  completed: false,
  tags: ["garden"],
};

const shallowCopy = { ...todo };
console.log(todo === shallowCopy); // false

// Original object is not modified
shallowCopy.text = "Buy milk";
// Here, original object IS modified;
// we only copied the reference to the array.
shallowCopy.tags.push("shopping");
console.log("Shallow Copy", shallowCopy);
console.log("Todo", todo);

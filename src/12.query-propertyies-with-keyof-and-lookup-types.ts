interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todoObj: Todo = {
  id: 1,
  text: "Buy Milk",
  completed: false,
};

// Lookup type (or index access type)
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type TodoId = Todo["id"];
type TodoText = Todo["text"];
type TodoCompleted = Todo["completed"];
type TodoTextOrCompleted = Todo["text" | "completed"];

const id = prop(todoObj, "id");
const text = prop(todoObj, "text");
const completed = prop(todoObj, "completed");
// This is invalid:
// const dueDate = prop(todoObj, "dueDate");

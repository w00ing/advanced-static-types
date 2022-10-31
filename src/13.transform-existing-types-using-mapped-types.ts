interface Point {
  x: number;
  y: number;
}

const originPoint = Object.freeze<Point>({ x: 0, y: 0 });
// Object is not immutable
// originPoint.x = 1; // Cannot assign to 'x' because it is a read-only property
// originPoint.y = 1; // Cannot assign to 'y' because it is a read-only property

type ReadonlyPoint = {
  readonly [P in "x" | "y"]: Point[P];
};

let partialPoint: Partial<Point>;
type PartialPoint = Partial<Point>;

type Stringify<T> = {
  [P in keyof T]: string;
};

type PartialNullablePoint = Partial<Nullable<Stringify<Point>>>;

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

let nullablePoint: Nullable<Point>;

// step-01

const user: { name: string; age: number } = {
  name: "Bob",
  age: 30,
};

const userNameLikeNumber: { name: string; age: number } = {
  name: "10",
  age: 30,
};

export { user, userNameLikeNumber };

// step-02

type User = {
  name: string;
  age: number;
};

const userBob: User = {
  name: "Bob",
  age: 30,
};

const userBill: User = {
  name: "Bill",
  age: 25,
};

export { userBob, userBill };

// step-03

interface UserInterface {
  name: string;
  age: number;
}

const userInterface: UserInterface = {
  name: "Tom",
  age: 30,
};

export { userInterface };

// step-04

const arrNumber: number[] = [1, 2, 3];
const arrString: string[] = ["Text", "Next"];

export { arrNumber, arrString };

// step-05

const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

export { matrix };

const mixed: (number | string)[] = [1, "Two"];

export { mixed };

// (generic)

const numbers: Array<number> = [1, 2, 3];

export { numbers };

// step-06

const users: {
  name: string;
  age: number;
}[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];

export { users };

// another way

type arrUsers = {
  name: string;
  age: number;
};

const arrUsers: arrUsers[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];

export { arrUsers };

// step-07

// const arrAny: any[] = [123, "TEXT", { name: "Tom" }, [1, 2, 3]];

// Using the any type undermines TypeScript's advantages, such as static typing and type checking during compilation.

// let notSure: any = 4;

// notSure = "maybe a string instead";
// notSure = false;
// notSure = {};

// const num: number = notSure;

// Unknown

// let notSure: unknown = 4;

// notSure = "maybe a string instead";
// notSure = false;
// notSure = {};

// const num: number = notSure;

// export { arrAny };
// export { num };

// step-08

// Tuple

const tupleType: [string, boolean] = ["hello", true]; // OK
// const tupleType: [string, boolean] = [true, "hello"]; // Error.
// const tupleType: [string, boolean] = ["hello", true, true]; // Error.

const date: [number, number, number] = [7, 11, 2023];

export { tupleType, date };

// We have an error

// let fixed: [string, number] = ["Text", 10];

// fixed.push("Add this text");

// export { fixed };

// fixed error

const tuple: [string, ...number[]] = ["hello", 42, 100, 200]; // OK

export { tuple };

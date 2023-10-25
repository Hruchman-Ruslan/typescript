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

// export { arrAny };

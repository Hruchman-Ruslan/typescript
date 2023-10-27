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

// step-09

// Enum

enum Role {
  ADMIN,
  USER,
}

export { Role };

enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Banned = "BANNED",
}

const status: UserStatus = UserStatus.Active;

export { status };

const enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

const statusCode = HttpCodes.OK;
// const statusCode = HttpCodes.BadRequest;
// const statusCode = HttpCodes.Unauthorized;

export { statusCode };

// step-10

// Union Type

let mixedType: string | number | boolean;

mixedType = "string"; // OK
mixedType = 10; // OK
mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

export { mixedType };

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + " " + param2.toString();
  }
}

export { combine };

// step-11

// Intersection Type

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: "Alice",
  id: 1,
  employees: [
    {
      name: "Bob",
      id: 2,
    },
  ],
};

export { ceo };

// step-12

// Literal Type

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1; // OK
value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = "yes" | "no";
let answer: YesOrNo;
answer = "yes"; // OK
answer = "no"; // OK
// answer = "maybe"; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

export { value, answer };

type ButtonSize = "small" | "medium" | "large";

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case "small":
      return { fontSize: "10px", padding: "5px" };
    case "medium":
      return { fontSize: "14px", padding: "10px" };
    case "large":
      return { fontSize: "18px", padding: "15px" };
    default:
      return { fontSize: "14px", padding: "10px" };
  }
}

const myButtonStyleSmall = getButtonStyle("small"); // OK
const myButtonStyleMedium = getButtonStyle("medium"); // OK
const myButtonStyleLarge = getButtonStyle("large"); // OK
// myButtonStyle = getButtonStyle("extra-large"); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

export { myButtonStyleSmall, myButtonStyleMedium, myButtonStyleLarge };

// Type Casting

// Type Casting (ore Type Conversion)

const someValue: unknown = "this is a string";

const strLength1: number = (<string>someValue).length;
// or
const strLength2: number = (someValue as string).length;

// const strLength3: number = someValue.length;

export { someValue, strLength1, strLength2 };

// step-01

// const input = document.getElementById("inputEmail");

// input.value = "test@test.ts";

// const input = <HTMLInputElement>document.getElementById("inputEmail");

// input.value = "test@test.ts";

// as

// const input = document.getElementById("inputEmail") as HTMLInputElement;

// step-03

const input = document.getElementById("inputEmail");

if (input) {
  (input as HTMLInputElement).value = "test@test.ts";
}

export { input };

// Index Properties

// type IndexType = {
//   [prop: string]: string;
// };

type Person = {
  name: string;
  [x: string]: string;
};

const userIndexProperties: Person = {
  name: "Alex",
  gender: "MAN",
  country: "Ukraine",
};

export { userIndexProperties };

type User = {
  id: string;
  name: string;
  email: string;
};

type Users = {
  [id: string]: User;
};

const usersIndex: Users = {};

const user: User = {
  id: "1",
  name: "Alex",
  email: "alex@example.com",
};

usersIndex[user.id] = user;

export { usersIndex };

//  (function overloads)

// function combineOverloads(input1: number, input2: number): number;
// function combineOverloads(input1: string, input2: string): string;
// function combineOverloads(input1: string, input2: number): string;
// function combineOverloads(input1: number, input2: string): string;
// function combineOverloads(input1: any, input2: any) {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   } else if (typeof input1 === "string" && typeof input2 === "string") {
//     return input1 + input2;
//   } else if (typeof input1 === "string" && typeof input2 === "number") {
//     return input1 + input2;
//   } else if (typeof input1 === "number" && typeof input2 === "string") {
//     return input1 + input2;
//   }
// }

// export { combineOverloads };

// step-01

// function concatenate(strs: string[]): string;
// function concatenate(strs: string[], separator: string): string;
// function concatenate(strs: any, separator?: any): any {
//   if (separator !== undefined) {
//     return strs.join(separator);
//   } else {
//     return strs.join("");
//   }
// }

// const names = ["Alice", "Bob", "Charlie"];

// export { concatenate, names };

// step-02

type AdminType = {
  type: "admin";
  name: string;
  privileges: string[];
};

type UserType = {
  type: "user";
  name: string;
  registrationDate: Date;
};

function checkUser(name: string, type: "user"): UserType;
function checkUser(
  name: string,
  type: "admin",
  privileges: string[]
): AdminType;
function checkUser(
  name: string,
  type: "admin" | "user",
  privilegesOrRegistrationDate?: string[]
): AdminType | UserType {
  if (type === "admin") {
    return {
      type,
      name,
      privileges: privilegesOrRegistrationDate as string[],
    };
  }

  return {
    type,
    name,
    registrationDate: new Date(),
  };
}

const userCheck = checkUser("Nikita", "user");
const adminCheck = checkUser("Tonya", "admin", ["manageUsers", "deletePosts"]);

export { userCheck, adminCheck };

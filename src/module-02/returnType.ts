// step-01

// return string

function greet(): string {
  return "Hello, world!";
  //   return 100; // Error: Type 'number' is not assignable to type 'string'
}

const resultGreet = greet();

export { resultGreet };

// arrow function

const arrowGreet = (): string => {
  return "arrowFunction: Hello, world!";
};

const arrowGreetResult = arrowGreet();

export { arrowGreetResult };

// step-02

type User = {
  id: number;
  name: string;
};

const getUserName = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const resultUsers = getUserName(users);

export { resultUsers };

// void

function logMessage(message: string): void {
  console.log(message);
}

function doSomething(callback: () => void) {
  callback();
}

doSomething(() => {
  console.log("Callback function!");
});

export { logMessage, doSomething };

// never

// function that always throws an error

function throwError(message: string): never {
  throw new Error(message);
}

// function with an infinite loop

// function infiniteLoop(): never {
//   while (true) {}
// }

export { throwError };
// export { infiniteLoop };

// Any attempt to assign a value to a value variable that is of type never results in a compile error.

// let value: never;

// value = 123;
// value = "hello";

// export { value };

// function type

// let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// export { myFunc };

type CallbackType = (num1: number, num2: number) => number;

function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result calc:", callback(param1, param2));
}

calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

export { calc };

// next lvl

type betterCallbackType = (...numbers: number[]) => number;

function betterCalc(
  param1: number,
  param2: number,
  callback: betterCallbackType
): void {
  console.log("Result betterCalc:", callback(param1, param2));
}

export { betterCalc };

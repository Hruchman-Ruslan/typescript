// Generics

// step-01

// const genericsArr: any[] = [];

// step-02

// let genericsArr: Array<string | number> = [];

// genericsArr = ["str", 10, true]; Error

const genericsArr: Array<string | number> = [];

export { genericsArr };

// step-03

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("asynchronous code: Done!");
  });
});

promise.then((data) => {
  console.log(data);
});

export { promise };

// Generic function/method

// step-01

function identity<T>(arg: T): T {
  return arg;
}

// const output1 = identity<string>("myString");
// const output2 = identity<number>(100);

const output1 = identity("myString");
const output2 = identity(100);

export { identity, output1, output2 };

// step-02

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
const firstNum = firstElement(numbers);

const strings = ["a", "b", "c", "d"];
const firstStr = firstElement(strings);

export { firstNum, firstStr };

// step-03

function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

// const merged = merge({ name: "Alisa" }, { age: 28 });

// merged.name; Error

const merged = merge({ name: "Alisa" }, { age: 28 }) as {
  name: string;
  age: number;
};

// merged.name; fix

export { merged };

// Extends

// step-01

function mergeExtends<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedExtends = merge({ name: "Alisa" }, "TEXT");Error

export { mergeExtends };

// step-02

type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

export { getLength };

// step-03

function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

export { arrayLogger };

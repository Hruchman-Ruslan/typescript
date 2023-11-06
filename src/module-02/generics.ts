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

// keyof

// step-01

type Person = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person;

function getPersonInfo(person: Person, key: PersonKeys) {
  return person[key];
}

const john: Person = {
  name: "John",
  age: 25,
  location: "NY",
};

export { getPersonInfo, john };

// step-02

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

export { extractValue };

// Generic Classes

// step-01

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Hello");
textStorage.addItem("Hello");
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
// numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'

export { textStorage, numberStorage };

// step-02

class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair("name", "Alice");

const pair2 = new KeyValuePair(1, true);

export { pair1, pair2 };

// Utility Types

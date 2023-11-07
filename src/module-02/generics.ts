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

// Partial<T>

type User = {
  id: number;
  name: string;
  email: string;
  register: boolean;
};

function createUser(data: Partial<User>): User {
  const defaultUser: User = {
    id: Date.now(),
    name: "",
    email: "",
    register: false,
  };

  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Alice", email: "alice@example.com" });

export { newUser };

// Readonly<T>

// step-01

type UserReadonly = {
  id: number;
  name: string;
  email: string;
};

const readonlyAlice: UserReadonly = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

readonlyAlice.name = "Bob"; // OK

const aliceReadonly: Readonly<UserReadonly> = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// userReadonly.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

export { readonlyAlice, aliceReadonly };

// const arr: Readonly<string[]> = ["One", "Two", "Three"];

// arr.push("Four"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Pick<T, K>

// step-01

type UserPick = {
  id: number;
  name: string;
  email: string;
};

type UserBasicInfo = Pick<UserPick, "id" | "name">;

const userBasicInfo: UserBasicInfo = {
  id: 1,
  name: "John Doe",
  // email: "john@example.com", // Error: Property 'email' does not exist on type 'UserBasicInfo'
};

export { userBasicInfo };

// step-02

type BaseEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  startDate: Date;
};

type BaseProject = {
  id: number;
  name: string;
  budget: number;
  deadline: Date;
};

type Assignment = {
  employee: Pick<BaseEmployee, "id" | "firstName" | "lastName">;
  projects: Pick<BaseProject, "id" | "name" | "deadline">[];
  shouldNotifyEmployee?: boolean;
};

const exampleBaseProject: Assignment = {
  employee: {
    id: 1,
    firstName: "Alice",
    lastName: "SomeLastName",
  },
  projects: [
    {
      id: 1,
      name: "Alice",
      deadline: new Date(),
    },
  ],
};

export { exampleBaseProject };

// Record<K, T>

// step-01

type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Weekend = "Sat" | "Sun";

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

export { translations };

// step-02

enum UserRoles {
  admin = "admin",
  manager = "manager",
  employee = "employee",
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
  [UserRoles.employee]: true,
};

export { userRoleStatuses };

// step-03

type InitialFormType = {
  name: string;
  email: string;
  password: string;
};

export type Form = InitialFormType & {
  errors: Partial<Record<keyof InitialFormType, [string]>>;
};

// Omit<T, K>

type PersonOmit = {
  name: string;
  age: number;
  location: string;
};

type PersonWithoutLocation = Omit<PersonOmit, "location">;

const personWithLocation: PersonOmit = {
  name: "John",
  age: 30,
  location: "New York",
};

const personWithoutLocation: PersonWithoutLocation = {
  name: "Alice",
  age: 25,
  // Note that the 'location' property is omitted in this case.
};

export { personWithLocation, personWithoutLocation };

// ReturnType<T>

// step-01

function greeting() {
  return "Hello, world!";
}

type Greeting = ReturnType<typeof greeting>; // 'string'

function multiply(a: number, b: number) {
  return a * b;
}

const exampleUseGreeting: Greeting = greeting();

type MultiplyResult = ReturnType<typeof multiply>; // 'number'

const exampleUseMultiplyResult: MultiplyResult = multiply(3, 4);

export { exampleUseGreeting, exampleUseMultiplyResult };

// step-02?

type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  const funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}

export { createLoggedFunction };

// Parameters<T>

// type MyFunctionType = (a: string, b: number, c: boolean) => void;

// type MyParametersType = Parameters<MyFunctionType>;

// NonNullable<T>

// type SomeType = string | null | undefined;

// NonNullableType will be equal to 'string'
// type NonNullableType = NonNullable<SomeType>;

// practice

// task-01

type MixedType = {
  [key: string]: string | number;
};

const userInfo: MixedType = {
  name: "Alice",
  age: 30,
  country: "Ukraine",
};

const bookInfo: MixedType = {
  title: "Some Book",
  pageCounter: 500,
};

export { userInfo, bookInfo };

// task-02

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

const reversNumber = reverse<number>([1, 2, 3, 4, 5]);

const reverseString = reverse<string>(["a", "b", "c", "d"]);

export { reversNumber, reverseString };

// task-03

const student = {
  name: "Alice",
  age: 30,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const studentName = getProperty(student, "name");

const studentAge = getProperty(student, "age");

export { studentName, studentAge };

// task-04

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "Learn TypeScript",
  description: "Study the basics in TypeScript",
  completed: false,
};

const todo2 = updateTodo(todo1, {
  description: "Study generics in TypeScript",
});

export { todo1, todo2 };

// task-05

type UserReadonly = {
  name: string;
  age: number;
};

const johnReadonly: Readonly<UserReadonly> = {
  name: "John",
  age: 30,
};

// john.age = 31; Error

const numbersReadonly: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbersReadonly.push(10); Error
// numbersReadonly[0] = 0; Error

export { johnReadonly, numbersReadonly };

// task-06

type PersonPick = {
  name: string;
  age: number;
  address: string;
};

type PersonSummary = Pick<PersonPick, "name" | "age">;

const johnSummary: PersonSummary = {
  name: "John",
  age: 30,
};

type PersonOmit = {
  name: string;
  age: number;
  address: string;
};

type PersonWithoutAddress = Omit<PersonOmit, "address">;

const johnWithoutAddress: PersonWithoutAddress = {
  name: "John",
  age: 30,
  //   address: "123 Main St", Error
};

export { johnSummary, johnWithoutAddress };

// task-07

type CityDataBase = Record<string, number>;

const databaseRecord: CityDataBase = {
  Kyiv: 2884000,
  Kharkiv: 1441000,
  Odessa: 1015000,
};

databaseRecord.Lviv = 721301;

export { databaseRecord };

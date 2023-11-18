// Interfaces in TypeScript

import { IPersonTs, IPilot } from "./interfaces";

interface InterfacesPerson {
  firstName: string;
  lastName: string;
  age?: number;
}

function greetInterfaces(person: InterfacesPerson) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

const bill: InterfacesPerson = {
  firstName: "Bill",
  lastName: "Doe",
};

export { bill, greetInterfaces };

// Object interfaces

// type IPerson = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

const iPerson: IPerson = {
  name: "Antony",
  age: 30,

  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
};

export { iPerson };

// Class interfaces

// step-01

class Pilot implements IPersonTs, IPilot {
  constructor(public name: string, public age: number) {
    if (this.age < 20) {
      throw new Error("Pilot too young");
    }
  }

  pilotGreet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  flyMessage(): void {
    console.log(
      "The plane has gained altitude, everyone have a pleasant flight!"
    );
  }

  setAutopilot(): void {
    console.log("Autopilot enabled.");
  }
}

// const pilot = new Pilot("Anthony", 32);

// export { pilot };

//  step-02

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error("No pilot in cabin");
    }
    console.log("Starting the turbines");

    this.pilot.flyMessage();
    return true;
  }
}

const boeing = new Boeing();
const pilot = new Pilot("Anthony", 32);

export { pilot, boeing };

// Readonly

interface ITest {
  readonly name: string;
}

const readonlyPerson: ITest = {
  name: "Some Name",
};

// readonlyPerson.name = "Another name";

export { readonlyPerson };

// Extending Interfaces

interface IPersonExtending {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilotExtending extends IPersonExtending {
  flyMessage(): void;
}

export type { IPilotExtending };

// Interfaces as a function type

// step-01

type AddFuncType = (n1: number, n2: number) => number;

const addFunctionType: AddFuncType = (n1: number, n2: number): number => {
  return n1 + n2;
};

export { addFunctionType };

// step-02

interface AddFuncInterface {
  (n1: number, n2: number): number;
}

const addFunctionInterface: AddFuncInterface = (
  n1: number,
  n2: number
): number => {
  return n1 + n2;
};

export { addFunctionInterface };

// Optional parameters

interface IOptional {
  name?: string;
  age: number;
}

class OptionalParameters implements IOptional {
  name?: string;

  constructor(public age: number) {}

  setName(n: string) {
    this.name = n;
  }
}

const optionalParameters = new OptionalParameters(30);

export { optionalParameters };

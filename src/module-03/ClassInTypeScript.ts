// Class in TypeScript

// constructor

class House {
  street: string;

  constructor(n: string) {
    this.street = n;
  }
}

const house = new House("Middle-earth");

export { house };

// method

class HouseMethod {
  street: string;

  constructor(n: string) {
    this.street = n;
  }

  showAddress(this: HouseMethod) {
    console.log(`Address: ` + this.street);
  }
}

const houseMethod = new HouseMethod("Middle-earth");
const houseCopy = { street: "Dummy", showAddress: houseMethod.showAddress };

export { houseMethod, houseCopy };

// Access modifiers

// step-01

class A {
  //   public someProperty = "string";
  //   private someProperty = "string";
  protected someProperty = "string";
}

class B extends A {
  showProperty() {
    console.log(this.showProperty);
  }
}

const a = new A();
const b = new B();

export { a, b };

// step-02

class HouseModifier {
  private street: string;

  private tenants: string[] = [];

  constructor(n: string) {
    this.street = n;
  }

  public showAddress(this: HouseModifier) {
    console.log("Address: " + this.street);
  }

  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

const houseModifier = new HouseModifier("Middle-earth");

export { houseModifier };

// Abbreviation of initialization

// class HouseInitialization {
//   constructor(private: string, private street: string) {}
// }

// export { HouseInitialization };

// Readonly

// step-01

class HouseReadonlyArray {
  constructor(public readonly tenants: string[]) {}

  addTenant(tenant: string) {
    this.tenants.push(tenant);
  }
}

const houseReadonlyArray = new HouseReadonlyArray([]);

export { houseReadonlyArray };

// step-02

// class HouseReadonlyObject {
//   constructor(public readonly address: { street: string; number: number }) {}
// }

// const houseReadonlyObject = new HouseReadonlyObject({
//   street: "Main St",
//   number: 42,
// });

// export { houseReadonlyObject };

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

// Imitation

// step-01

// class HouseImitation {
//   constructor(private readonly type: string, private street: string) {}
// }

// class StoneHouse extends HouseImitation {
//   constructor(street: string) {
//     super("stone", street);
//   }
// }

// const stoneHouse = new StoneHouse("Stone-world");

// export { stoneHouse };

// step-02

class HouseImitation {
  private tenants: string[] = [];

  constructor(private readonly type: string, private street: string) {}

  public showAddress(this: HouseImitation) {
    console.log("Address: " + this.street);
  }

  public showType(this: HouseImitation) {
    console.log("HouseImitation Type: " + this.type);
  }

  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends HouseImitation {
  private chargeOfTheHouse: string;

  constructor(street: string, generalTenant: string) {
    super("stone", street);

    this.chargeOfTheHouse = generalTenant;

    this.addTenant(generalTenant);
  }

  public showTenants() {
    console.log("General: " + this.chargeOfTheHouse);

    super.showTenants();
  }
}

const stoneHouse = new StoneHouse("Stone-world", "Max");

export { stoneHouse };

// Getter/Setter

type PersonInformation = {
  firstName?: string;
  lastName?: string;
};

class PersonGetterSetter {
  private personInfo: PersonInformation = {};

  set firstName(value: string) {
    console.log("firstName added");

    this.personInfo.firstName = value;
  }

  set lastName(value: string) {
    console.log("lastName added");

    this.personInfo.lastName = value;
  }

  get info() {
    const { personInfo } = this;

    return `${personInfo.firstName} ${personInfo.lastName}`;
  }
}

const personGetterSetter = new PersonGetterSetter();

export { personGetterSetter };

// Static methods and properties

class UseStatic {
  private static count = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static itStaticMethod() {
    console.log("Run static method");
  }

  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

export { obj1, obj2, obj3, UseStatic };

// Abstract classes

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): boolean;
}

class Maize extends Plane {
  public startEngine() {
    // Start the propeller engine.

    return true;
  }
}

class Boeing extends Plane {
  public startEngine() {
    // Power up the jet engines.

    return true;
  }
}

// class BrokenPlane extends Plane {} // Error: Class 'BrokenPlane' does not implement inherited abstract method 'startEngine' from class 'Plane'.

export { Maize, Boeing };

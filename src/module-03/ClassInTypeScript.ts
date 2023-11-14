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

// Optional parameters and properties

// step-01

function greetOptional(name?: string) {
  if (name) {
    return `Hello ${name}!`;
  } else {
    return "Hello!";
  }
}

export { greetOptional };

// step-02

type Person = {
  name: string;
  age?: number;
};

const alice: Person = { name: "Alice", age: 27 };
const bob: Person = { name: "Bob" };

export { alice, bob };

// Difference between Type and Interface

interface InterfaceAnimal {
  name: string;
}

type TypeAnimal = {
  name: string;
};

const typeAnimal: TypeAnimal = { name: "typeAnimal" };
const interfaceAnimal: InterfaceAnimal = { name: "interfaceAnimal" };

export { typeAnimal, interfaceAnimal };

// step-02

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dogAnimal: Animal = {
  name: "Fido",
  age: 5,
};

export { dogAnimal };

// step-03

type AnimalName = {
  name: string;
};

type AnimalAge = {
  age: number;
};

type AnimalType = AnimalName & AnimalAge;

const typeDog: AnimalType = {
  name: "Fido",
  age: 20,
};

export { typeDog };

// step-04

// type Cat = {
//   meow: () => string;
// };

// interface Dog {
//   bark: () => string;
// }

// type DogOrCat = Dog | Cat;
// type DogAndCat = Dog & Cat;

// export { DogOrCat, DogAndCat };

//  step-05

interface AnimalDog {
  name: string;
}

interface Dog extends AnimalDog {
  bark: string;
}

class MyDog implements Dog {
  name = "Fido";
  bark = "Wolf!";
}

// class OtherDog implements Dog {
//   // Error: Property 'name' is missing in type 'OtherDog'
//   bark = "Wolf!";
// }

export { MyDog };

//  step-06

interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class AnimalWalkableOreEatable implements Walkable, Eatable {
  walk() {
    console.log("The animal walks...");
  }

  eat() {
    console.log("The animal eats...");
  }
}

const animalWalkableOreEatable = new AnimalWalkableOreEatable();

export { animalWalkableOreEatable };

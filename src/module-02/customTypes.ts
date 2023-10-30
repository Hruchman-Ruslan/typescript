// step-01

type User = {
  id: number;
  name: string;
};

const userCustom: User = {
  id: 1,
  name: "Alice",
};

export { userCustom };

// step-02

type Coordinate = [number, number];

type UserWithCoords = {
  id: number;
  name: string;
  coords: Coordinate;
};

const userWithCoords: UserWithCoords = {
  id: 1,
  name: "Alice",
  coords: [10, 20],
};

export { userWithCoords };

// step-03

enum AnimalIds {
  cat = "cat",
  dog = "dog",
  fish = "fish",
}

type Animal = {
  [AnimalIds.cat]: {
    meow: () => string;
  };
  [AnimalIds.dog]: {
    bark: () => string;
  };
  [AnimalIds.fish]: {
    swim: () => undefined;
  };
};

const cat: Animal[AnimalIds.cat] = {
  meow: () => "Meow! I am a cat",
};

const dog: Animal[AnimalIds.dog] = {
  bark: () => "Woof! I am a dog",
};

const fish: Animal[AnimalIds.fish] = {
  swim: () => undefined,
};

export { cat, dog, fish };

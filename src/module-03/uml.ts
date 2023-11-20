// UML and design patterns

// Unified Modeling Language (UML)

// step-01

class AnimalUml {
  constructor(public name: string) {}

  say() {
    console.log("Nothing to say");
  }
}

class CatUml extends AnimalUml {
  constructor(name: string, private speed: number) {
    super(name);
  }

  say() {
    console.log("Meow!");
  }

  run(time: number) {
    return `${this.name} ran at ${this.speed} for ${time} seconds.`;
  }
}

const catUml = new CatUml("Tom", 2);

export { catUml };

// step-02

interface IPerson {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet(phrase: string): void {
    console.log(phrase + ", my name is " + this.name);
  }
}

const bob = new Person("Bob", 30);

export { bob };

// Dependence

type ItemType = {
  name: string;
};

class Catalog {
  showCatalog(items: ItemType[]) {
    items.forEach((item) => {
      console.log(item.name);
    });
  }
}

class Items {
  private items: ItemType[] = [];

  setItem(name: string) {
    this.items.push({ name });
  }

  getItems(): ItemType[] {
    return this.items;
  }
}

const itemDependence = new Items();
const catalogDependence = new Catalog();

export { itemDependence, catalogDependence };

// Association

class DB {
  connection() {
    console.log("Db connected");
  }
}

class Server {
  constructor(private database: DB) {}

  init() {
    this.database.connection();
  }
}

const db = new DB();
const server = new Server(db);

export { db, server };

// Aggregation

class PersonAggregation {
  constructor(public name: string) {}
}

class HomeAggregation {
  private guests: PersonAggregation[] = [];

  addGuest(guests: PersonAggregation) {
    this.guests.push(guests);
  }
}

const homeAggregation = new HomeAggregation();

const guest1 = new PersonAggregation("Max");
const guest2 = new PersonAggregation("Anton");
const guest3 = new PersonAggregation("Nikita");

export { homeAggregation, guest1, guest2, guest3 };

// Composition

// step-01

class PersonComposition {
  constructor(public name: string) {}
}

class HomeComposition {
  private tenants: PersonComposition[] = [];

  addTenant(name: string) {
    const tenant = new PersonComposition(name);
    this.tenants.push(tenant);
  }
}

const homeComposition = new HomeComposition();

export { homeComposition };

// step-02

// class Captain {
//   constructor(public name: string) {}
// }

// class Ship {
//   private captain: Captain;

//   setCaptain(name: string) {
//     const captain = new Captain(name);
//     this.captain = captain;
//   }

//   sink() {
//     console.log(
//       `Ship is sinking! Captain ${this.captain.name} goes down with the ship.`
//     );
//   }
// }

// const ship = new Ship();

// export { ship };

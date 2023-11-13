// class Zhiguli_8 {
//   private needRepair = false;
//   private maxEngineLoad = 5;

//   private checkEngine() {
//     if (this.needRepair) {
//       throw new Error("Engine not work");
//     }

//     const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
//     if (this.maxEngineLoad === engineLoad) {
//       this.needRepair = true;
//       throw new Error("Engine broken again");
//     }
//   }

//   public startEngine() {
//     this.checkEngine();
//     console.log("Ta-ta-ta-ta");
//   }

//   public repairEngine() {
//     this.needRepair = false;
//     console.log("Engine rebuilt");
//   }
// }

// const auto = new Zhiguli_8();

// try {
//   while (true) {
//     auto.startEngine();
//   }
// } catch (e) {
//   console.log(e);
//   auto.repairEngine();
//   while (true) {
//     auto.startEngine();
//   }
// }

// export { auto };

// step-01

class UserClass {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public save(): void {}
}

export { UserClass };

// step-02

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class AreaCalculator {
  public calculate(shape: Shape): number {
    return shape.calculateArea();
  }
}

export { AreaCalculator, Rectangle, Circle };

// step-03

abstract class Vehicle {
  abstract startEngine(): void;
  abstract accelerate(): void;
}

class CarClass extends Vehicle {
  startEngine(): void {
    this.engageIgnition();
  }

  accelerate() {
    console.log("Car is accelerating");
  }

  private engageIgnition() {
    console.log("Engaging car ignition");
  }
}

class ElectricBus extends Vehicle {
  startEngine() {
    console.log("Electric bus engine started");
  }

  accelerate() {
    this.increaseVoltage();
    this.connectIndividualEngines();
    console.log("Electric bus is accelerating");
  }

  private increaseVoltage() {
    console.log("Increasing electric bus voltage");
  }

  private connectIndividualEngines() {
    console.log("Connecting individual electric bus engines");
  }
}

class Driver {
  go(vehicle: Vehicle) {
    vehicle.startEngine();
    vehicle.accelerate();
  }
}

const carDriver = new CarClass();
const busDriver = new ElectricBus();
const driver = new Driver();

export { carDriver, busDriver, driver };

// step-04

interface JsonParser {
  jsonParse(): string;
}

interface HtmlParser {
  htmlParse(): string;
}

class UniversalParser implements JsonParser, HtmlParser {
  jsonParse(): string {
    return "Parsing JSON";
  }

  htmlParse(): string {
    return "Parsing HTML";
  }
}

class SpecificHtmlParser implements HtmlParser {
  htmlParse(): string {
    return "Specifically parsing HTML";
  }
}

const newUniversalParser = new UniversalParser();
const newSpecificHtmlParser = new SpecificHtmlParser();

export { newUniversalParser, newSpecificHtmlParser };

// step-05

interface FoodProvider {
  getFood(): void;
}

class Feeder implements FoodProvider {
  getFood() {
    return "Implementation of the food supply process";
  }
}

class Animal {
  private foodProvider: FoodProvider;

  constructor(foodProvider: FoodProvider) {
    this.foodProvider = foodProvider;
  }

  eat() {
    this.foodProvider.getFood();
  }
}

const newFeeder = new Feeder();
const newAnimal = new Animal(newFeeder);

export { newFeeder, newAnimal };

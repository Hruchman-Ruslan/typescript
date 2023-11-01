// Advanced Types

// Type Guards

// step-01

type ComplexType = string | number;

function combineTypeof(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
}

export { combineTypeof };

// step-02

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type AdminOreEmployee = Admin | Employee;

function printDetails(obj: AdminOreEmployee) {
  console.log(`Name ${obj.name}`);

  if ("privileges" in obj)
    console.log(`Privileges: ${obj.privileges.join(", ")}`);

  if ("startDate" in obj) console.log(`Start Date: ${obj.startDate}`);
}

// Example usage:
const admin: Admin = {
  name: "Admin User",
  privileges: ["read", "write"],
};

const employee: Employee = {
  name: "Employee User",
  startDate: new Date(),
};

export { printDetails, admin, employee };

// instanceof

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

type Vehicle = Car | Truck;

const carInstance = new Car();
const truckInstance = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

export { carInstance, truckInstance, useVehicle };

// User-Defined

type Dog = {
  bark: () => void;
};

type Cat = {
  meow: () => void;
};

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal;
}

function letAnimalTalk(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const talkDog: Dog = {
  bark: () => {
    console.log("Dog barks!");
  },
};

const talkCat: Cat = {
  meow: () => {
    console.log("Cat meows!");
  },
};

export { letAnimalTalk, talkDog, talkCat };

// as

type AsAdmin = {
  name: string;
  privileges: string[];
};

type AsEmployee = {
  name: string;
  startDate: Date;
};

type Staff = AsAdmin | AsEmployee;

function isEmployee(staff: Staff): staff is AsEmployee {
  return (staff as AsEmployee).startDate !== undefined;
}

const staffMember: Staff = { name: "Bob", startDate: new Date() };

if (isEmployee(staffMember)) {
  console.log(
    `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
  );
}

export { isEmployee, staffMember };

// Type Casting

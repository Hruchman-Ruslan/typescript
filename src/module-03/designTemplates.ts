// Design templates

// Singleton

class AppSingleton {
  private static instance: AppSingleton;

  constructor() {
    if (!AppSingleton.instance) {
      AppSingleton.instance = this;
    }

    return AppSingleton.instance;
  }
}

const appSingleton = new AppSingleton();

export { appSingleton };

// Factory

// interface PaymentProcessor {
//   validate(data: any): boolean;
//   pay(amount: number): void;
// }

// class CreditCardProcessor implements PaymentProcessor {
//   validate(data: any): boolean {
//     // Validation of credit card data
//     return true;
//   }

//   pay(amount: number): void {
//     console.log(`Paid ${amount} using Credit Card.`);
//   }
// }

// class PayPalProcessor implements PaymentProcessor {
//   validate(data: any): boolean {
//     // Validation of PayPal data
//     return true;
//   }

//   pay(amount: number): void {
//     console.log(`Paid ${amount} using PayPal.`);
//   }
// }

// class BitcoinProcessor implements PaymentProcessor {
//   validate(data: any): boolean {
//     // Validation of Bitcoin data
//     return true;
//   }

//   pay(amount: number): void {
//     console.log(`Paid ${amount} using Bitcoin.`);
//   }
// }

// class PaymentProcessorFactory {
//   static createProcessor(type: string): PaymentProcessor {
//     switch (type) {
//       case "CreditCard":
//         return new CreditCardProcessor();
//       case "PayPal":
//         return new PayPalProcessor();
//       case "Bitcoin":
//         return new BitcoinProcessor();
//       default:
//         throw new Error(`Payment method ${type} is not supported.`);
//     }
//   }
// }

// const processor = PaymentProcessorFactory.createProcessor("CreditCard");

// export { processor };

// Builder

// step-01

class Car {
  constructor(
    public model: string,

    public year: number,

    public color: string
  ) {}
}

class CarBuilder {
  private model!: string;

  private year!: number;

  private color!: string;

  setModel(model: string): CarBuilder {
    this.model = model;

    return this;
  }

  setYear(year: number): CarBuilder {
    this.year = year;

    return this;
  }

  setColor(color: string): CarBuilder {
    this.color = color;

    return this;
  }

  build(): Car {
    return new Car(this.model, this.year, this.color);
  }
}

const builderCar = new CarBuilder();

const carBuilder = builderCar
  .setModel("Tesla Model S")
  .setYear(2023)
  .setColor("Red")
  .build();

export { carBuilder };

// step-02

class QueryBuilder {
  private table: string = "";

  private whereParams: string[] = [];

  private orderBy: string = "";

  from(table: string): QueryBuilder {
    this.table = table;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.whereParams.push(condition);
    return this;
  }

  order(condition: string): QueryBuilder {
    this.orderBy = condition;
    return this;
  }

  build(): DatabaseQuery {
    return new DatabaseQuery(this.table, this.whereParams, this.orderBy);
  }
}

class DatabaseQuery {
  constructor(
    private table: string,
    private whereParams: string[],
    private orderBy: string
  ) {}

  query(): void {
    let query = `SELECT * FROM ${this.table}`;

    if (this.whereParams.length) {
      query += ` WHERE ${this.whereParams.join(" AND ")}`;
    }

    if (this.orderBy) {
      query += ` ORDER BY ${this.orderBy}`;
    }

    console.log(`Executing query: ${query}`);
  }
}

const buildQuery = new QueryBuilder();
const dbQuery = buildQuery
  .from("Users")
  .where("age > 21")
  .where('status = "active"')
  .order("lastName")
  .build();

export { dbQuery };

// Adapter

class OldService {
  oldRequest(): string {
    return "Old Service Request";
  }
}

interface NewService {
  request(): string;
}

class Adapter implements NewService {
  constructor(private oldService: OldService) {}

  public request(): string {
    const result = this.oldService.oldRequest();

    return `Adapter: (TRANSLATED) ${result}`;
  }
}

class Client {
  constructor(private newService: NewService) {}

  public useService(): void {
    console.log(this.newService.request());
  }
}

const oldService = new OldService();
const adapter = new Adapter(oldService);
const clientAdapter = new Client(adapter);

export { oldService, adapter, clientAdapter };

// Decorator

interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost() {
    return 10;
  }

  description() {
    return "Simple Coffee";
  }
}

class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost() {
    return this.coffee.cost();
  }

  description() {
    return this.coffee.description();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }

  description() {
    return this.coffee.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }

  description() {
    return this.coffee.description() + ", sugar";
  }
}

let coffee: Coffee = new SimpleCoffee();

coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

export { coffee };

// Facade

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type Address = {
//   userId: number;
//   street: string;
//   city: string;
//   country: string;
// };

// type PaymentData = {
//   userId: number;
//   cardNumber: string;
//   expiryDate: string;
// };

// class UserService {
//   getUser(id: number): User {
//     console.log(`Fetching user data for userId: ${id}`);
//     return { id, name: "John Doe", email: "john.doe@example.com" };
//   }

//   updateUser(user: User): void {
//     console.log(`Updating user: ${JSON.stringify(user)}`);
//   }
// }

// class AddressService {
//   getAddresses(userId: number): Address[] {
//     console.log(`Fetching addresses for userId: ${userId}`);
//     return [{ userId, street: "123 Street", city: "City", country: "Country" }];
//   }

//   updateAddress(userId: number, address: Address): void {
//     console.log(`Updating address for userId: ${userId}`);
//   }
// }

// class PaymentService {
//   getPaymentData(userId: number): PaymentData {
//     console.log(`Fetching payment data for userId: ${userId}`);
//     return { userId, cardNumber: "1234 5678 9012 3456", expiryDate: "01/25" };
//   }

//   updatePaymentData(userId: number, paymentData: PaymentData): void {
//     console.log(`Updating payment data for userId: ${userId}`);
//   }
// }

// class UserProfileFacade {
//   constructor(
//     private userService: UserService,
//     private addressService: AddressService,
//     private paymentService: PaymentService
//   ) {}

//   getUserProfile(userId: number): User {
//     const user = this.userService.getUser(userId);
//     user["addresses"] = this.addressService.getAddresses(userId);
//     user["paymentData"] = this.paymentService.getPaymentData(userId);
//     return user;
//   }

//   updateUserProfile(
//     userId: number,
//     userData: User,
//     address: Address,
//     paymentData: PaymentData
//   ): void {
//     this.userService.updateUser(userData);
//     this.addressService.updateAddress(userId, address);
//     this.paymentService.updatePaymentData(userId, paymentData);
//   }
// }

// const userService = new UserService();
// const addressService = new AddressService();
// const paymentService = new PaymentService();

// const userProfileFacade = new UserProfileFacade(
//   userService,
//   addressService,
//   paymentService
// );

// const userIdToFetch = 1;
// const userProfile = userProfileFacade.getUserProfile(userIdToFetch);

// const updatedUserData: User = {
//   id: userIdToFetch,
//   name: "Updated Name",
//   email: "updated.email@example.com",
// };
// const updatedAddress: Address = {
//   userId: userIdToFetch,
//   street: "456 Avenue",
//   city: "New City",
//   country: "New Country",
// };
// const updatedPaymentData: PaymentData = {
//   userId: userIdToFetch,
//   cardNumber: "9876 5432 1098 7654",
//   expiryDate: "12/27",
// };

// userProfileFacade.updateUserProfile(
//   userIdToFetch,
//   updatedUserData,
//   updatedAddress,
//   updatedPaymentData
// );

// export { userProfile };

// State

// interface State {
//   proceedToNext(order: Order): void;
//   toString(): string;
// }

// class Order {
//   private state: State;

//   constructor() {
//     this.state = new PendingState();
//   }

//   public proceedToNext() {
//     this.state.proceedToNext(this);
//   }

//   public setState(state: State) {
//     this.state = state;
//   }

//   public toString(): string {
//     return this.state.toString();
//   }
// }

// class PendingState implements State {
//   public proceedToNext(order: Order): void {
//     console.log("Proceeding from Pending to Shipped...");
//     order.setState(new ShippedState());
//   }

//   public toString(): string {
//     return "Pending";
//   }
// }

// class ShippedState implements State {
//   public proceedToNext(order: Order): void {
//     console.log("Proceeding from Shipped to Delivered...");
//     order.setState(new DeliveredState());
//   }

//   public toString(): string {
//     return "Shipped";
//   }
// }

// class DeliveredState implements State {
//   public proceedToNext(order: Order): void {
//     console.log("Already delivered. Thank you!");
//   }

//   public toString(): string {
//     return "Delivered";
//   }
// }

// const order = new Order();

// console.log(order.toString()); // Output: Pending

// order.proceedToNext();
// console.log(order.toString()); // Output: Shipped

// order.proceedToNext();
// console.log(order.toString()); // Output: Delivered

// // order.proceedToNext(); // Output: Already delivered. Thank you!

// export { order };

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

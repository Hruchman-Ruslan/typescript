import { useState } from "react";
import "./App.css";

//
import add from "./module-01/addNumber";
import greet from "./module-01/person";
import {
  Role,
  answer,
  // arrAny,
  arrNumber,
  arrString,
  arrUsers,
  ceo,
  combine,
  date,
  // fixed,
  matrix,
  mixedType,
  myButtonStyleLarge,
  myButtonStyleMedium,
  myButtonStyleSmall,
  // num,
  numbers,
  status,
  statusCode,
  tuple,
  tupleType,
  user,
  userBill,
  userBob,
  userInterface,
  userNameLikeNumber,
  users,
  value,
} from "./module-02/user";
import {
  arrowGreetResult,
  betterCalc,
  calc,
  doSomething,
  // infiniteLoop,
  logMessage,
  // myFunc,
  resultGreet,
  resultUsers,
  throwError,
} from "./module-02/returnType";
import {
  cat,
  dog,
  fish,
  userCustom,
  userWithCoords,
} from "./module-02/customTypes";
import {
  MyDog,
  // OtherDog,
  alice,
  animalWalkableOreEatable,
  bob,
  dogAnimal,
  greetOptional,
  interfaceAnimal,
  typeAnimal,
  typeDog,
} from "./module-02/parametersAndProperties";
import {
  admin,
  carInstance,
  combineTypeof,
  employee,
  isEmployee,
  letAnimalTalk,
  printDetails,
  staffMember,
  talkCat,
  talkDog,
  truckInstance,
  useVehicle,
} from "./module-02/AdvancedTypes";
import {
  adminCheck,
  // combineOverloads,
  // concatenate,
  input,
  // names,
  someValue,
  strLength1,
  strLength2,
  userCheck,
  userIndexProperties,
  usersIndex,
} from "./module-02/typeCasting";
import {
  aliceReadonly,
  exampleBaseProject,
  exampleUseGreeting,
  exampleUseMultiplyResult,
  extractValue,
  // arrayLogger,
  firstNum,
  firstStr,
  genericsArr,
  getLength,
  getPersonInfo,
  john,
  merged,
  newUser,
  numberStorage,
  // mergedExtends,
  output1,
  output2,
  pair1,
  pair2,
  personWithLocation,
  personWithoutLocation,
  promise,
  readonlyAlice,
  textStorage,
  translations,
  userBasicInfo,
  userRoleStatuses,
} from "./module-02/generics";
import {
  bookInfo,
  databaseRecord,
  johnReadonly,
  johnSummary,
  johnWithoutAddress,
  numbersReadonly,
  reversNumber,
  reverseString,
  studentAge,
  studentName,
  todo1,
  todo2,
  userInfo,
} from "./module-02/practiceModuleTwo";
import {
  AreaCalculator,
  UserClass,
  busDriver,
  carDriver,
  driver,
  newAnimal,
  newFeeder,
  newSpecificHtmlParser,
  newUniversalParser,
} from "./module-03/ExampleClass";
import {
  UseStatic,
  // HouseInitialization,
  a,
  b,
  house,
  houseCopy,
  houseMethod,
  houseModifier,
  houseReadonlyArray,
  obj1,
  obj2,
  obj3,
  personGetterSetter,
  stoneHouse,
  // stoneHouse,
  // houseReadonlyObject,
} from "./module-03/ClassInTypeScript";
import {
  addFunctionInterface,
  addFunctionType,
  bill,
  boeing,
  greetInterfaces,
  iPerson,
  optionalParameters,
  pilot,
  readonlyPerson,
} from "./module-03/interfacesInTypeScript";
import {
  catUml,
  catalogDependence,
  guest1,
  guest2,
  guest3,
  homeAggregation,
  homeComposition,
  itemDependence,
  server,
  // ship,
} from "./module-03/uml";
import {
  adapter,
  appSingleton,
  carBuilder,
  clientAdapter,
  coffee,
  dbQuery,
  oldService,
  // order,
  // userProfile,
  // processor
} from "./module-03/designTemplates";
import AddTodoForm from "./module-03/AddTodoForm";
import TodoItem from "./module-03/TodoItem";
// import { auto } from "./module-03/ExampleClass";
//

// type Task = {
//   id: number;
//   text: string;
// }

export interface Task {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //  check;

  // module-01
  const checkAdd = add(1, 2);
  // const check = add("1", "1");
  console.log("checkAdd", checkAdd);

  const checkPerson = { firstName: "John", lastName: "Doe" };
  // const checkPerson = { name: "John" };
  console.log(greet(checkPerson));

  //  module-02
  // step-01
  console.log("user", user);
  console.log("userNameLikeNumber", userNameLikeNumber);
  // step-02
  console.log("userBill", userBill);
  console.log("userBob", userBob);
  // step-03
  console.log("UserInterface", userInterface);
  //  step-04
  console.log("arrNumber", arrNumber);
  console.log("arrString", arrString);
  //  step-05
  console.log("matrix", matrix);
  // (generic)
  console.log(numbers);
  // step-06
  console.log("users", users);
  // another way
  console.log("arrUsers", arrUsers);
  // step-07
  // console.log("arrAny", arrAny);
  // Using the any type undermines TypeScript's advantages, such as static typing and type checking during compilation.
  // console.log("num", num);
  // step-08
  console.log("tupleType", tupleType);
  console.log("date", date);
  // console.log("fixed", fixed);
  console.log("tuple", tuple);
  // step-09
  console.log("Role", Role);
  console.log("enum value", Role[Role.ADMIN]);
  console.log("status", status);
  console.log("statusCode", statusCode);
  // step-10
  console.log("mixedType", mixedType);
  console.log("combine", combine(5, 5));
  console.log("combineToString", combine("Hello", "world"));
  // step-11
  console.log("ceo", ceo);
  // step-12
  console.log("value", value);
  console.log("answer", answer);
  console.log("myButtonStyleSmall", myButtonStyleSmall);
  console.log("myButtonStyleMedium", myButtonStyleMedium);
  console.log("myButtonStyleLarge", myButtonStyleLarge);
  // Return type
  // step-01
  console.log("resultGreet", resultGreet);
  console.log("arrowGreetResult", arrowGreetResult);
  // step-02
  console.log("resultUsers", resultUsers);
  // void
  console.log(logMessage);
  console.log(doSomething);
  // never
  console.log("throwError", throwError);
  // console.log("infiniteLoop", infiniteLoop);
  // function type
  // console.log(myFunc("Hello", 42));
  console.log(calc(1, 1, (num1, num2) => num1 + num2));
  console.log(calc(10, 5, (num1, num2) => num1 - num2));
  console.log(betterCalc(1, 1, (num1, num2) => num1 + num2));
  console.log(betterCalc(10, 5, (num1, num2) => num1 - num2));
  // customTypes
  console.log("userCustom", userCustom);
  console.log("userWithCoords", userWithCoords);
  console.log(cat);
  console.log(dog);
  console.log(fish);
  /// Optional parameters and properties
  console.log("greet optional:", greetOptional("Alice"));
  console.log("greet optional else:", greetOptional());
  // step-02
  console.log("alice", alice);
  console.log("bob", bob);
  // Difference between Type and Interface
  console.log("typeAnimal", typeAnimal);
  console.log("interfaceAnimal", interfaceAnimal);
  // step-02
  console.log("dogAnimal", dogAnimal);
  // step-03
  console.log("typeDog", typeDog);
  //  step-05
  // console.log("OtherDog", OtherDog);
  console.log("MyDog", MyDog);
  //  step-06
  console.log("animalWalkable", animalWalkableOreEatable.walk);
  console.log("animalEatable", animalWalkableOreEatable.eat);
  // Advanced Types
  // Type Guards
  // step-01
  console.log(combineTypeof("Hello", "!"));
  // step-02
  console.log("admin:", printDetails(admin));
  console.log("employee:", printDetails(employee));
  // instanceof
  console.log("carInstance:", useVehicle(carInstance));
  console.log("truckInstance:", useVehicle(truckInstance));
  // User-Defined
  console.log("talkDog:", letAnimalTalk(talkDog));
  console.log("talkCat:", letAnimalTalk(talkCat));
  // as
  console.log("staffMember:", staffMember);
  console.log("staffMember:", isEmployee(staffMember));
  // Type Casting
  console.log("someValue", typeof someValue);
  console.log("strLength1", typeof strLength1);
  console.log("strLength2", typeof strLength2);
  // step-01
  console.log("input", typeof input);
  // Index Properties
  console.log("userIndexProperties", userIndexProperties);
  console.log("usersIndex", usersIndex);
  //  (function overloads)
  // console.log("combineOverloads:", combineOverloads(1, 2)); // Outputs: 3
  // console.log("combineOverloads:", combineOverloads("Hello", "World")); // Outputs: HelloWorld
  // console.log("combineOverloads:", combineOverloads("Hello", 2)); // Outputs: Hello2
  // console.log("combineOverloads:", combineOverloads(1, "World")); // Outputs: 1World
  // step-01
  // console.log("concatenate:", concatenate(names)); // Outputs: AliceBobCharlie
  // console.log("concatenate:", concatenate(names, ", ")); // Outputs: Alice, Bob, Charlie
  // step-02
  console.log("userCheck", userCheck);
  console.log("adminCheck", adminCheck);
  // Generics
  console.log("genericsArr:", genericsArr);
  // step-03
  console.log("promise:", promise);
  // Generic function/method
  // step-01
  console.log("output1:", typeof output1);
  console.log("output2:", typeof output2);
  // step-02
  console.log("firstNum:", firstNum);
  console.log("firstStr:", firstStr);
  // step-03
  console.log("merged:", merged);
  // Extends
  // step-01
  // console.log("mergedExtends:", mergedExtends);
  // step-02
  console.log("getLengthString:", getLength("text"));
  console.log("getLengthArr:", getLength([1, 2, 3]));
  // getLength(100); // Error: Argument of type 'number' is not assignable to parameter of type 'ILength'
  // step-03
  // console.log("arrayLogger is ok!:", arrayLogger(["Hello", "World"]));
  // console.log("arrayLogger is Error!:", arrayLogger([1, 2, 3]));
  // keyof
  // step-01
  console.log("getPersonInfo:", getPersonInfo(john, "age"));
  console.log("getPersonInfo:", getPersonInfo(john, "name"));
  // console.log(getPersonInfo(john, "job")); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.
  // step-02
  console.log("extractValue:", extractValue({ name: "John" }, "name"));
  // Generic Classes
  // step-01
  console.log("textStorage:", textStorage);
  console.log("numberStorage:", numberStorage.getItems());
  // step-02
  console.log("pair1 Key:", pair1.getKey());
  console.log("pair1 Value:", pair1.getValue());
  console.log("pair2 Key:", pair2.getKey());
  console.log("pair2 Value:", pair2.getValue());
  // Utility Types
  // Partial<T>
  console.log("newUser:", newUser);
  // Readonly<T>
  // step-01
  console.log("readonlyAlice:", readonlyAlice);
  console.log("aliceReadonly:", aliceReadonly);
  // Pick<T, K>
  // step-01
  console.log("userBasicInfo:", userBasicInfo);
  // step-02
  console.log("exampleBaseProject:", exampleBaseProject);
  // Record<K, T>
  // step-01
  console.log("translations:", translations);
  // step-02
  console.log("userRoleStatuses:", userRoleStatuses);
  // Omit<T, K>
  console.log("personWithLocation:", personWithLocation);
  console.log("personWithoutLocation:", personWithoutLocation);
  // ReturnType<T>
  // step-01
  console.log("exampleUseGreeting:", exampleUseGreeting);
  console.log("exampleUseMultiplyResult:", exampleUseMultiplyResult);
  // step-02?
  // practice Module-02
  // task-01
  console.log("userInfo:", userInfo);
  console.log("bookInfo:", bookInfo);
  // task-02
  console.log("reversNumber:", reversNumber);
  console.log("reverseString:", reverseString);
  // task-03
  console.log("studentName:", studentName);
  console.log("studentAge:", studentAge);
  // task-04
  console.log("todo1:", todo1);
  console.log("todo2 to update:", todo2);
  // task-05
  console.log("johnReadonly:", johnReadonly);
  console.log("numbersReadonly:", numbersReadonly);
  // task-06
  console.log("johnSummary:", johnSummary);
  console.log("johnWithoutAddress:", johnWithoutAddress);
  // task-07
  console.log("databaseRecord:", databaseRecord);
  // Module-03
  // ExampleClass
  // console.log("ExampleClass", auto);
  // stp-01
  console.log("UserClass:", UserClass);
  // step-02
  console.log("AreaCalculator:", AreaCalculator);
  // step-03
  console.log("carDriver:", carDriver);
  console.log("busDriver:", busDriver);
  console.log("driver-carDriver:", driver.go(carDriver));
  console.log("driver-busDriver:", driver.go(busDriver));
  // step-04
  console.log("newSpecificHtmlParser:", newSpecificHtmlParser.htmlParse());
  console.log("newUniversalParser:", newUniversalParser.jsonParse());
  // step-05
  console.log("newFeeder:", newFeeder.getFood());
  console.log("newAnimal:", newAnimal);
  // Class in TypeScript
  // constructor
  console.log("house:", house);
  // method
  houseMethod.showAddress();
  houseCopy.showAddress();
  // Access modifiers
  // step-01
  console.log("a:", a);
  console.log("b:", b);
  // step-02
  houseModifier.addTenant("Anton");
  houseModifier.addTenant("Nikita");
  houseModifier.showTenants();
  // Abbreviation of initialization
  // console.log("HouseInitialization:",HouseInitialization)
  // Readonly
  // step-01
  houseReadonlyArray.addTenant("Alice");
  console.log(houseReadonlyArray.tenants);
  // step-02
  // houseReadonlyObject.address = { street: "High St", number: 1 };
  // houseReadonlyObject.address.number = 43;
  // console.log("houseReadonlyObject:", houseReadonlyObject);
  // Imitation
  // step-01
  // console.log("stoneHouse:", stoneHouse);
  // step-02
  stoneHouse.addTenant("Anton");
  stoneHouse.addTenant("Nikita");

  stoneHouse.showTenants();
  stoneHouse.showType();
  stoneHouse.showAddress();
  // Getter/Setter
  personGetterSetter.lastName = "Pupkin";
  personGetterSetter.firstName = "Petha";

  console.log("personGetterSetter:", personGetterSetter.info);
  // Static methods and properties
  obj1.showCount();
  obj2.showCount();
  obj3.showCount();

  UseStatic.itStaticMethod();
  // Abstract classes
  // Interfaces in TypeScript
  greetInterfaces(bill);
  // Object interfaces
  iPerson.greet("Greetings everyone, I");
  // Class interfaces
  // step-01
  // pilot.pilotGreet("Captain welcomes you aboard");
  // pilot.flyMessage();
  // step-02
  pilot.pilotGreet("Captain welcomes you aboard");

  boeing.sitInPlane(pilot);

  boeing.startEngine();
  // Readonly
  console.log("readonlyPerson:", readonlyPerson);
  // Extending Interfaces
  // Interfaces as a function type
  // step-01
  console.log("addFunctionType:", addFunctionType(2, 3));
  // step-02
  console.log("addFunctionInterface:", addFunctionInterface(2, 3));
  // Optional parameters
  optionalParameters.setName("Alice");
  console.log("optionalParameters.name:", optionalParameters.name);
  console.log("optionalParameters.age:", optionalParameters.age);
  // UML and design patterns
  // Unified Modeling Language (UML)
  // step-01
  console.log("catUml:", catUml);
  console.log("catUml:", catUml.run(4));
  // step-02
  bob.name = "Alice";
  bob.age = 35;
  console.log("bob:", bob);
  // Dependence
  itemDependence.setItem("Catalog 1");
  itemDependence.setItem("Catalog 2");
  itemDependence.setItem("Catalog 3");
  catalogDependence.showCatalog(itemDependence.getItems());
  // Association
  server.init();
  // Aggregation
  homeAggregation.addGuest(guest1);
  homeAggregation.addGuest(guest2);
  homeAggregation.addGuest(guest3);

  console.log("homeAggregation:", homeAggregation);
  // Composition
  // step-01
  homeComposition.addTenant("Max");
  homeComposition.addTenant("Anton");
  homeComposition.addTenant("Nikita");

  console.log("homeComposition:", homeComposition);
  // step-02
  // ship.setCaptain("John");
  // ship.sink();
  // Design templates
  // Singleton
  console.log("appSingleton:", appSingleton);
  // Factory
  // processor.pay(100);
  // Builder
  // step-01
  console.log("carBuilder:", carBuilder);
  // step-02
  dbQuery.query();
  // Adapter
  console.log("oldService:", oldService);
  console.log("adapter:", adapter);
  console.log("clientAdapter:", clientAdapter);
  clientAdapter.useService();
  // Decorator
  console.log(`${coffee.description()} - ${coffee.cost()} dollars`);
  // Facade
  // console.log("User Profile:", userProfile);
  // State
  // order.proceedToNext();
  //  check;

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <AddTodoForm onAdd={addTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

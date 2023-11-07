import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
//

function App() {
  const [count, setCount] = useState(0);

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
  //  check;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

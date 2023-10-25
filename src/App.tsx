import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//
import add from "./module-01/addNumber";
import greet from "./module-01/person";
import {
  // arrAny,
  arrNumber,
  arrString,
  arrUsers,
  matrix,
  numbers,
  user,
  userBill,
  userBob,
  userInterface,
  userNameLikeNumber,
  users,
} from "./module-02/user";
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
import { useState, useRef, useReducer, useEffect } from "react";
import { FocusableInput, FocusableInputRef } from "./FocusableInput";
import { ForwardedPaymentForm, PaymentFormHandleRef } from "./PaymentForm";
import { useUserState } from "./UserProvider";

// useState

// step-01

export function Counter() {
  const [count, setCount] = useState(0); // The same primitive type
  // const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// step-02

// type User = {
//   name: string;
//   email: string;
// };

// export function UserComponent() {
//   const [user, setUser] = useState<User>({
//     name: "john",
//     email: "qwe123qwe@gmail.com",
//   });

//     return (
//         // ...
//     )
// }

// step-03

type Status = "loading" | "idle" | "error";

export function LoadingComponent() {
  const [status, setStatus] = useState<Status>("idle");

  const loadingData = async () => {
    setStatus("loading");
    try {
      // This would be your data loading logic
      // If successful:
      setStatus("idle");
    } catch (error) {
      // If successful:
      setStatus("error");
    }
  };

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={loadingData}>Load data</button>
    </div>
  );
}

// step-04

type Props = {
  initialState: string;
  onSave: (value: string) => void;
};

export function TextInput({ initialState, onSave }: Props) {
  const [value, setValue] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    onSave(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

// useRef

// step-01

export function TextInputWithFocus() {
  // Here we specify that the ref will refer to an element of type HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // The current field now has the same properties as the HTMLInputElement element
    inputRef.current?.focus();
  };

  return (
    <>
      {/* // Here inputEl will be a reference to this input element */}
      <input type="text" ref={inputRef} />
      <button onClick={onButtonClick}>Set the focus to the input field</button>
    </>
  );
}

// step-02

export function ComponentWithRef() {
  const divRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <div ref={divRef}>This is a div element</div>
      <textarea ref={textareaRef}></textarea>
      <select ref={selectRef}></select>
    </>
  );
}

// step-03

export function ComponentWithRefIncrement() {
  const countRef = useRef<number>(0); // Specifying <number> is optional.

  const increment = () => {
    countRef.current += 1;

    console.log(`Current value: ${countRef.current}`);
  };

  return <button onClick={increment}>Increase</button>;
}

// useImperativeHandle

// step-01

export function OtherComponent() {
  const inputRef = useRef<FocusableInputRef>(null);

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus;
  };

  return (
    <>
      <FocusableInput ref={inputRef} initialText="Hello" />
      <button onClick={handleClick}>Set Focus</button>
    </>
  );
}

// step-02

export function CheckoutPage() {
  const paymentFormRef = useRef<PaymentFormHandleRef>(null);

  const handlePaymentSubmit = async () => {
    if (!paymentFormRef.current) {
      return;
    }

    const data = await paymentFormRef.current.submit();
    console.log(data);
  };

  return (
    <div>
      <ForwardedPaymentForm ref={paymentFormRef} />
      <button onClick={handlePaymentSubmit}>Submit Payment</button>
    </div>
  );
}

// useReducer

// step-01

// type State = {
//   count: number;
// };

// type Action = { type: "increment" } | { type: "decrement" };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// step-02

// const initialState: State = { count: 0 };

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   // ...
// }

// step-03

// type UserReducer = {
//   id: string;
//   name: string;
//   email: string;
// };

// type StateReducer = {
//   loading: boolean;
//   error: string | null;
//   user: UserReducer | null;
// };

// type ActionReducer =
//   | { type: "LOADING" }
//   | { type: "SUCCESS"; payload: UserReducer }
//   | { type: "ERROR"; error: string };

// function reducerNext(state: StateReducer, action: ActionReducer): StateReducer {
//   switch (action.type) {
//     case "LOADING":
//       return { ...state, loading: true, error: null };
//     case "SUCCESS":
//       return { loading: false, error: null, user: action.payload };
//     case "ERROR":
//       return { ...state, loading: false, error: action.error };
//     default:
//       throw new Error();
//   }
// }

// const initialStateNext: StateReducer = {
//   loading: false,
//   error: null,
//   user: null,
// };

// function UserLoader() {
//   const [state, dispatch] = useReducer(reducerNext, initialStateNext);
//   // ...
// }

// dispatch({ type: "LOADING" }); // OK
// dispatch({
//   type: "SUCCESS",
//   payload: { id: "1", name: "John", email: "john@example.com" },
// }); // OK
// dispatch({ type: "ERROR", error: "Failed to load user" }); // OK
// dispatch({ type: "SUCCESS" }); // Error, payload is missing
// dispatch({ type: "ERROR" }); // Error, error is missing

// result

type User = {
  id: number;
  name: string;
  email: string;
};

type State = {
  loading: boolean;
  error: string | null;
  user: User | null;
};

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: User }
  | { type: "ERROR"; error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { loading: false, error: null, user: action.payload };
    case "ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      throw new Error();
  }
}

const initialState: State = {
  loading: false,
  error: null,
  user: null,
};

export function UserLoading() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: "LOADING" });

      try {
        const response = await fetch("/api/user");
        const user = await response.json();

        dispatch({ type: "SUCCESS", payload: user });
      } catch (error) {
        dispatch({ type: "ERROR", error: (error as Error).message });
      }
    };

    fetchUser();
  }, []);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>{state.error}</div>;
  if (!state.user) return null;

  return (
    <div>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
    </div>
  );
}

// useContext

// A component using the context

export function UserProfile() {
  const { user, setUser } = useUserState();

  // Simulate the loading of user data.
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "johnDoe@gmail.com",
      });
    }, 2000);
  }, [setUser]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

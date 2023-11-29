import { useState, useRef } from "react";

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

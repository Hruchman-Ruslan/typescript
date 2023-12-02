import {
  ChangeEvent,
  FormEvent,
  useState,
  KeyboardEvent,
  // MouseEvent
} from "react";

// Typing of events

// FormEvent

function MyForm() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // prevent standard form behavior (form submission)

    console.log("The form has been submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

// onClick

// function ChildComponent() {
//   const handleClickChild = (event: MouseEvent<HTMLButtonElement>) => {
//     // We stop the popup of the event to the parent component
//     event.stopPropagation();

//     console.log("Child component clicked");
//   };

//   return <button onClick={handleClickChild}>Click me</button>;
// }

// function ParentComponent() {
//   const handleParentClick = (event: MouseEvent<HTMLDivElement>) => {
//     console.log("Parent component clicked");
//   };

//   return (
//     <div onClick={handleParentClick}>
//       <ChildComponent />
//     </div>
//   );
// }

// onChange

// step-01

function TextInput() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log("Entered text:", event.target.value);
  };

  return <input type="text" value={text} onChange={handleTextChange}></input>;
}

// step-02

// type InputProps = {
//   value: string | number;
//   type: "text" | "number";
//   onChange: (value: string | number) => void;
// };

// function Input({ value, type, onChange }: InputProps) {
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     let newValue = event.target.value;
//     //   let newValue: string | number = event.target.value;

//     if (type === "number") newValue = Number(newValue);

//     console.log("Changed value:", newValue);
//     onChange(newValue);
//   };

//   return <input type={type} value={value.toString()} onChange={handleChange} />;
// }

// KeyboardEvent

type InputKeyPressProps = {
  value: string;
  onChange: (value: string) => void;
  onPressEnter: () => void;
};

function InputKeyPress({ value, onChange, onPressEnter }: InputKeyPressProps) {
  const handlePress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
      onPressEnter();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input value={value} onChange={handleChange} onKeyPress={handlePress} />
  );
}

export {
  MyForm,
  // ParentComponent,
  TextInput,
  InputKeyPress,
  //   Input,
};

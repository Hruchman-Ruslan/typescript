import { useState, FC, FormEvent, ChangeEvent } from "react";

// type AddTodoFormProps = {
//   onAdd: (text: string) => void;
// };

interface IAddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: FC<IAddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo"
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

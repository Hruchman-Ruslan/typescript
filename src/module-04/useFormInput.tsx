import { useState, useCallback } from "react";

// Custom hooks

type UseFormInput = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function useFromInput(initialValue: string): UseFormInput {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return {
    value,
    onChange,
  };
}

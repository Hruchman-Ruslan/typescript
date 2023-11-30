import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  initialText: string;
};

export type FocusableInputRef = {
  focus: () => void;
};

function FocusableInput(
  { initialText }: Props,
  ref: ForwardedRef<FocusableInputRef>
) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return <input ref={inputRef} defaultValue={initialText} />;
}

const refForwarded = forwardRef<FocusableInputRef, Props>(FocusableInput);

export { refForwarded as FocusableInput };

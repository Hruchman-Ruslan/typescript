import { useRef, useCallback } from "react";

// Custom hooks

type Callback = (...args: unknown[]) => unknown;

export function useSingletonFunction<T extends Callback>(func: T) {
  const funcRef = useRef(func);
  funcRef.current = func;

  const singletonFunction = (...args: Parameters<T>) =>
    funcRef.current(...args) as ReturnType<T>;

  return useCallback(singletonFunction, []);
}

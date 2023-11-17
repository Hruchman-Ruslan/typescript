// interfaces

interface IPersonTs {
  name: string;
  age: number;

  pilotGreet(phase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

export type { IPersonTs, IPilot };

// Typing of components

import React from "react";

type UserProps = {
  name: string;
  age: number;
};

// step-01

export function UserComponent({ name, age }: UserProps) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
    </div>
  );
}

// step-02

export const UserComponentFC: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
    </div>
  );
};

// step-03

export class UserComponentClass extends React.Component<UserProps> {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>{`User name is ${name}`}</p>
        <p>{`User age is ${age}`}</p>
      </div>
    );
  }
}

// Typing for children

type ChildrenType = {
  name: string;
  age: number;
  children: React.ReactNode; // Typing for children
};

export function UserComponentChildren({ name, age, children }: ChildrenType) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
      {children} {/* Render children */}
    </div>
  );
}

// ReactElement

type ChildrenReactElement = {
  children: React.ReactElement;
};

export function Panel({ children }: ChildrenReactElement) {
  return <div>{children}</div>;
}

// This works:
{
  /* <Panel>
   <div>Hello, world!</div>
</Panel> */
}

// This doesn't work because "Hello, world!" is a string, not an element
{
  /* <Panel>Hello, world!</Panel> */
}

// Typing of functions and objects in props

// type User = {
//   name: string;
//   email: string;
// };

// type Props = {
//   user: User;
//   onUserUpdate: (user: User) => void;
// };

// export function UserProfile({ user, onUserUpdate }: Props) {
//   // UserProfile component
//   return null;
// }

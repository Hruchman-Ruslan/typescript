import { createContext, useState, useContext } from "react";

type User = {
  name: string;
  email: string;
} | null;

type UserStateContextProps = {
  user: User;
};

type UserActionsContextProps = {
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserStateContext = createContext<UserStateContextProps | undefined>(
  undefined
);

const UserActionsContext = createContext<UserActionsContextProps | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

// The provider itself
export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>(null);

  return (
    <UserStateContext.Provider value={{ user }}>
      <UserActionsContext.Provider value={{ setUser }}>
        {children}
      </UserActionsContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useStateUser() {
  const context = useContext(UserStateContext);

  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }

  return context;
}

export function useActionsUser() {
  const context = useContext(UserActionsContext);

  if (context === undefined) {
    throw new Error("useUserActions must be used within a UserProvider");
  }

  return context;
}

import { useContext, createContext, useState } from "react";

// useContext

type UserContext = {
  name: string;
  email: string;
};

type UserContextProps = {
  user: UserContext | null;
  setUser: React.Dispatch<React.SetStateAction<UserContext | null>>;
};

const userContext = createContext<UserContextProps | undefined>(undefined);

type PropsContext = {
  children: React.ReactNode;
};

// The provider itself
export function UserProvider({ children }: PropsContext) {
  const [user, setUser] = useState<UserContext | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

// Hook to use the context

export function useUserState() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

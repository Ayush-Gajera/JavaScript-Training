import { useState, createContext, useContext } from "react";
type Role = "user" | "admin";
interface User {
  name: string;
  role: Role;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (role: Role) => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  function login(role: Role) {
    setLoading(true);
    setTimeout(() => {
      setUser({
        name: role === "admin" ? "Admin user" : "Normal user",
        role,
      });
      setIsAuthenticated(true);
      setLoading(false);
    }, 2000);
  }

  return <>
  <AuthContext.Provider
  value={{
    user,
    isAuthenticated,
    isLoading,
    login
  }}>
  {children}
  </AuthContext.Provider>
  </>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

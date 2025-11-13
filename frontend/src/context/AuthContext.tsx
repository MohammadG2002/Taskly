import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  currentAuth: boolean;
  toggleAuth: () => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // default to not authenticated so sign-in shows for new sessions
  const [currentAuth, setCurrentAuth] = useState(false);

  const toggleAuth = () => setCurrentAuth((prev) => !prev);
  const login = () => setCurrentAuth(true);
  const logout = () => setCurrentAuth(false);

  return (
    <AuthContext.Provider value={{ currentAuth, toggleAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

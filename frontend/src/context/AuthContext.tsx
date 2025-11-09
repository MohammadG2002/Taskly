import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AuthContextType {
  currentAuth: boolean;
  toggleAuth: () => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentAuth, setCurrentAuth] = useState(true);

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

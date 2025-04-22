import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create a default implementation with proper implementations
const defaultLogin = async (_email: string, _password: string): Promise<void> => {
  console.log("Default login implementation called");
  await Promise.resolve();
};

const defaultLogout = (): void => {
  console.log("Default logout implementation called");
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: defaultLogin,
  logout: defaultLogout,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API call
    setUser({
      id: '1',
      name: 'Demo User',
      email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 
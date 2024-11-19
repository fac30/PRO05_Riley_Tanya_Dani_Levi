
import React, { createContext, useContext, useState, ReactNode } from "react";
import { login as loginAPI, signup as signupAPI } from "../api/authApi"; 

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginAPI(email, password);
      setUser(response.data.user); // Set user data or token, adjust as needed
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const response = await signupAPI(name, email, password);
      setUser(response.data.user); // Set user data or token, adjust as needed
    } catch (error) {
      console.error("Signup failed", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    //remove tokens from local storage or perform other cleanup
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
import { createContext } from "react";
import { User } from "../../user/typings";

interface AuthContextType {
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

import { useState } from "react";
import { AuthContext } from "../context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { googleSignInConfig } from "../google/constants";
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async () => {
    try {
      GoogleSignin.configure(googleSignInConfig);
      await GoogleSignin.hasPlayServices();
      const { data, type } = await GoogleSignin.signIn();

      if (type === "success") {
        console.log("Google Sign-In data:", data);
      } else {
        console.log("Google Sign-In failed");
      }
    } catch (error) {
      console.error("Error during Google Sign-In", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

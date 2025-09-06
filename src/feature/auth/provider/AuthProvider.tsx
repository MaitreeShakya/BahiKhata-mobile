import { AuthContext } from "../context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { googleSignInConfig } from "../google/constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { User } from "../../user/typings";
import { setAuthenticatedUser } from "../slices";
import { UserService } from "../../../services/UserService";
import { useEffect } from "react";
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user, isAuthenticated, error } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = async () => {
    const user = await UserService.getUserFromAsyncStorage();
    if (user) {
      dispatch(setAuthenticatedUser(user));
    }
  };

  const login = async () => {
    try {
      GoogleSignin.configure(googleSignInConfig);
      await GoogleSignin.hasPlayServices();
      const { data, type } = await GoogleSignin.signIn();

      if (type === "success") {
        const {
          user: { id, familyName, givenName, email },
        } = data;

        const user: User = {
          id,
          name: givenName + " " + familyName,
          email,
        };

        dispatch(setAuthenticatedUser(user));
      } else {
        console.log("Google Sign-In failed");
      }
    } catch (error) {
      console.error("Error during Google Sign-In", error);
    }
  };

  const logout = () => {
    GoogleSignin.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

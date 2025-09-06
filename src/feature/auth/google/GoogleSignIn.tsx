import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Button } from "react-native-paper";
import { googleSignInConfig } from "./constants";
import { useContext } from "react";
import { AuthContext } from "../context";

interface Props {}
export const GoogleSignIn = ({}: Props) => {
  const { login } = useContext(AuthContext)!;

  const handleSignIn = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Error during Google Sign-In", error);
    }
  };

  return (
    <Button mode="contained" onPress={handleSignIn}>
      Sign In With Google
    </Button>
  );
};

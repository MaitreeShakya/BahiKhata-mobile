import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Button } from "react-native-paper";

interface Props {}
export const GoogleSignIn = ({}: Props) => {
  GoogleSignin.configure({
    iosClientId: process.env.IOS_CLIENT_ID,
  });

  const handleSignIn = () => {
    try {
      GoogleSignin.signIn();
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

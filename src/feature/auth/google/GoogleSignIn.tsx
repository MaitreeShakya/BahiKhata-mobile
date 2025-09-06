import { Button } from "react-native-paper";
import { useAuth } from "../hooks/useAuth";

interface Props {}

export const GoogleSignIn = ({}: Props) => {
  const { login } = useAuth();

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

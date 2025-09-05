import { StyleSheet, View } from "react-native";
import { AuthStackNavProps } from "../../router/typings";
import { useEffect } from "react";
import { GoogleSignIn } from "../../feature/auth/google/GoogleSignIn";

interface Props extends AuthStackNavProps<"LoginScreen"> {}

export const LoginScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <GoogleSignIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

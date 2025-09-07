import { StyleSheet, View } from "react-native";
import { AuthStackNavProps } from "../../router/typings";
import { useEffect } from "react";
import { GoogleSignIn } from "../../feature/auth/google/GoogleSignIn";
import { Avatar } from "react-native-paper";

interface Props extends AuthStackNavProps<"LoginScreen"> {}

export const LoginScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const iconSource = require("../../../assets/logo.png");

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={100}
        source={iconSource}
        style={{ marginBottom: 20 }}
      />
      <GoogleSignIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

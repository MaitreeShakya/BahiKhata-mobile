import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const NoCameraPermission = () => {
  return (
    <View style={style.container}>
      <Text>Camera Permission Denied</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";

export const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>No expenses found</Text>
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

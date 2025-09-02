import { StyleSheet, Text, View } from "react-native";

interface Props {
  message: string;
}

export const ListEmptyComponent = ({ message }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
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

import { StyleSheet, View } from "react-native";
import ExpenseList from "../feature/expense/components/ExpenseList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ExpenseList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

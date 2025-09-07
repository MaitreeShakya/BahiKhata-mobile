import { Platform, StyleSheet, View } from "react-native";
import ExpenseList from "../feature/expense/components/ExpenseList";
import { useEffect, useState } from "react";
import AddExpense from "../feature/expense/components/AddExpense";
import FAB from "../components/fab";
import { AppStackNavProps } from "../router/typings";
import Header from "../components/header/Header";

interface Props extends AppStackNavProps<"HomeScreen"> {}

export default function HomeScreen({ navigation }: Props) {
  const [showAddExpenseModal, setShowAddExpenseModal] =
    useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const toggleAddExpenseModal = () => {
    setShowAddExpenseModal(!showAddExpenseModal);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ExpenseList />
      <FAB
        icon="plus"
        onPress={toggleAddExpenseModal}
        style={styles.addButton}
        mode="flat"
      />

      {showAddExpenseModal && <AddExpense onDismiss={toggleAddExpenseModal} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  addButton: {
    position: "absolute",
    bottom: 70,
    right: 16,
  },
});

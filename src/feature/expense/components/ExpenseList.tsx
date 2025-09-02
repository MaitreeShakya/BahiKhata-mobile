import { FlatList, StyleSheet } from "react-native";
import { useExpenses } from "../hooks/useExpenses";
import { ExpenseListItem } from "./ExpenseListItem";
import { ListEmptyComponent } from "../../../components/ListEmptyComponent";
import { useEffect } from "react";
import { Expense } from "../typings";

export default function ExpenseList() {
  const { data, onRefresh, refreshing } = useExpenses();

  useEffect(() => {
    onRefresh();
  }, []);

  const renderItem = ({ item, index }: { item: Expense; index: number }) => {
    return <ExpenseListItem item={item} index={index} onPress={() => {}} />;
  };

  const emptyComponentMessage = "No expenses found";

  return (
    <FlatList
      data={data}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={
        <ListEmptyComponent message={emptyComponentMessage} />
      }
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

import { FlatList, StyleSheet } from "react-native";
import { useExpenses } from "../hooks/useExpenses";
import { ExpenseListItem } from "./ExpenseListItem";
import { useEffect } from "react";
import { Expense } from "../typings";
import ListEmpty from "../../../components/list-empty";

export default function ExpenseList() {
  const { data, onRefresh, refreshing } = useExpenses();

  useEffect(() => {
    onRefresh();
  }, []);

  const renderItem = ({ item, index }: { item: Expense; index: number }) => {
    return <ExpenseListItem item={item} index={index} onPress={() => {}} />;
  };

  const keyExtractor = (item: Expense, index: number) => {
    return `exp-${item._id}-${index}`;
  };

  const ListEmptyComponent = (
    <ListEmpty message="No expenses found. Add some expenses to get started!" />
  );

  return (
    <FlatList
      data={data}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent}
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

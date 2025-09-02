import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Expense } from "../typings";
import IconButton from "../../../components/buttons/IconButton";

interface Props {
  item: Expense;
  index: number;
  onPress?: () => void;
}

export const ExpenseListItem = ({ item, index, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.amount}>${item.amount}</Text>
        </View>
      </View>
      <Pressable style={styles.imageContainer}>
        {item.receipt_url ? (
          <Image source={{ uri: item.receipt_url }} style={styles.image} />
        ) : (
          <IconButton iconName="attach-file" onPress={() => {}} />
        )}
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dateContainer: {
    marginBottom: 4,
  },

  date: {
    fontWeight: "bold",
  },

  contentContainer: {
    flex: 1,
  },

  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  description: {
    color: "#666",
  },
  amount: {
    color: "#000",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#eee",
    borderWidth: 1,
  },
});

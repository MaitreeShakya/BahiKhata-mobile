import { StyleSheet, Text, View } from "react-native";
import Modal from "../../../components/modal";
import { Button, Divider, IconButton } from "react-native-paper";
import { ExpenseForm } from "./ExpenseForm";

interface Props {
  onDismiss: () => void;
}

const AddExpense = ({ onDismiss }: Props) => {
  const onSubmit = () => {};

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Add Expense</Text>
            <IconButton
              icon="close"
              iconColor="red"
              onPress={onDismiss}
              style={styles.closeButton}
            />
          </View>
          <Divider/>
          <View style={styles.form}>
            <ExpenseForm onSubmit={onSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    width: "90%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    marginLeft: 16,
  },
  footer: {
    marginTop: 16,
  },
  form: {},
});

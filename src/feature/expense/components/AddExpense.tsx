import { StyleSheet, Text, View } from "react-native";
import Modal from "../../../components/modal";
import { Button, IconButton } from "react-native-paper";

interface Props {
  onDismiss: () => void;
}

const AddExpense = ({ onDismiss }: Props) => {
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
          <View style={styles.footer}>
            <Button
              onPress={onDismiss}
              mode="contained"
              buttonColor="red"
              textColor="white"
            >
              Close
            </Button>
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
    marginBottom: 16,
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
});

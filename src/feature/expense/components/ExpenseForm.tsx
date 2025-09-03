import { StyleSheet, View } from "react-native";
import { Expense } from "../typings";
import Field from "../../../components/fields";
import { FieldType } from "../../../components/fields/typings";
import { Button, Divider, TextInput } from "react-native-paper";

interface ExpenseFormProps {
  initialValues?: Expense;
  onSubmit: (values: Expense) => void;
}

export const ExpenseForm = ({ initialValues, onSubmit }: ExpenseFormProps) => {
  return (
    <>
      <View style={styles.container}>
        <Field
          type={FieldType.DatePicker}
          onChange={(date) => console.log(date)}
          value={""}
          label="Date"
        />
        <Field
          type={FieldType.TextInput}
          onChange={(text) => console.log(text)}
          value={""}
          label="Description"
          multiline={true}
        />
        <Field
          type={FieldType.TextInput}
          onChange={(text) => console.log(text)}
          value={""}
          label="Amount"
          keyboardType={"numeric"}
          left={<TextInput.Icon icon="currency-usd" color={"#000000"}/>}
        />
        <Field
          type={FieldType.Camera}
          isMulti={false}
          label="Receipt"
          onCapture={(value) => console.log(value)}
          value={""}
        />
      </View>
      <Divider />
      <View style={styles.footer}>
        <Button
          onPress={() => {}}
          mode="contained"
          buttonColor="#6200ee"
          textColor="#fff"
        >
          Submit
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  footer: {
    paddingTop: 16,
  },
  button: {},
});

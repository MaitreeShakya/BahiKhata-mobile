import { StyleSheet, View } from "react-native";
import { Expense } from "../typings";
import Field from "../../../components/fields";
import { FieldType } from "../../../components/fields/typings";
import { TextInput } from "react-native-paper";
import { useAppDispatch } from "../../../store/hooks";
import { useEffect } from "react";
import { setExpenseForm } from "../slices/ExpenseFormSlice";
import Button from "../../../components/button";
import Divider from "../../../components/divider";
import { EXPENSE_CATEGORIES } from "../constants";

interface ExpenseFormProps {
  initialValues?: Expense;
  onSubmit: (values: Expense) => void;
}

export const ExpenseForm = ({ initialValues, onSubmit }: ExpenseFormProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (initialValues) {
      dispatch(setExpenseForm(initialValues));
    }
  }, []);

  const handleSubmit = () => {};

  const expense_categories = EXPENSE_CATEGORIES.map((category) => ({
    label: category,
    value: category.toLowerCase(),
  }));

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
        />
        <Field
          type={FieldType.Dropdown}
          onSelect={(value) => console.log(value)}
          value={""}
          label="Category"
          isMulti={false}
          options={expense_categories}
        />
        <Field
          type={FieldType.TextInput}
          onChange={(text) => console.log(text)}
          value={""}
          label="Amount"
          keyboardType={"numeric"}
          left={<TextInput.Icon icon="currency-usd" color={"#000000"} />}
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
          onPress={handleSubmit}
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

import { ScrollView, StyleSheet, View } from "react-native";
import { Expense } from "../typings";
import Field from "../../../components/fields";
import {
  FieldType,
  OnChangePropsType,
} from "../../../components/fields/typings";
import { TextInput } from "react-native-paper";
import { useAppDispatch } from "../../../store/hooks";
import { useEffect } from "react";
import { setExpenseForm } from "../slices/ExpenseFormSlice";
import Button from "../../../components/button";
import Divider from "../../../components/divider";
import { EXPENSE_CATEGORIES } from "../constants";
import { useExpenseForm } from "../hooks/useExpenseForm";

interface ExpenseFormProps {
  initialValues?: Expense;
  onSubmit: (values: Expense) => void;
}

export const ExpenseForm = ({ initialValues, onSubmit }: ExpenseFormProps) => {
  const dispatch = useAppDispatch();

  const { data: formValues } = useExpenseForm();

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

  const onChange = ({ name, value }: OnChangePropsType) => {
    console.log("name:", name, "value:", value);
    dispatch(setExpenseForm({ ...formValues, [name as string]: value }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Field
          type={FieldType.DatePicker}
          onChange={onChange}
          value={formValues.date}
          label="Date"
          name="date"
        />
        <Field
          type={FieldType.TextInput}
          onChange={onChange}
          value={formValues.description}
          label="Description"
          name="description"
        />
        <Field
          type={FieldType.Dropdown}
          onSelect={onChange}
          value={formValues.category}
          label="Category"
          isMulti={true}
          options={expense_categories}
          name="category"
        />
        <Field
          type={FieldType.TextInput}
          onChange={onChange}
          value={formValues.amount ? formValues.amount.toString() : ""}
          label="Amount"
          keyboardType={"numeric"}
          left={<TextInput.Icon icon="currency-usd" color={"#000000"} />}
          name="amount"
        />
        <Field
          type={FieldType.Camera}
          isMulti={false}
          label="Receipt"
          onCapture={(value) => console.log(value)}
          value={""}
          name="receipt"
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "80%",
    paddingVertical: 16,
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingTop: 16,
  },
  button: {},
});

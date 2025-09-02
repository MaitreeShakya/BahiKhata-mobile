import { View } from "react-native";
import { Expense } from "../typings";
import Field from "../../../components/fields";
import { FieldType } from "../../../components/fields/typings";

interface ExpenseFormProps {
  initialValues?: Expense;
  onSubmit: (values: Expense) => void;
}

export const ExpenseForm = ({ initialValues, onSubmit }: ExpenseFormProps) => {
  return (
    <View>
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
      />
      <Field
        type={FieldType.Camera}
        isMulti={false}
        label="Receipt"
        onCapture={(value) => console.log(value)}
        value={""}
      />
    </View>
  );
};

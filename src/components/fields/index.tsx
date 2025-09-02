import DatePickerField from "./date-picker";
import TextInputField from "./text-input";
import { FieldProps, FieldType } from "./typings";

const Field = (props: FieldProps) => {
  switch (props.type) {
    case FieldType.TextInput: {
      return <TextInputField {...props} />;
    }
    case FieldType.DatePicker: {
      return <DatePickerField {...props} />;
    }
    default:
      return null;
  }
};

export default Field;

import CameraField from "./camera";
import DatePickerField from "./date-picker";
import TextInputField from "./text-input";
import DropDownField from "./drop-down";
import { FieldProps, FieldType } from "./typings";

const Field = (props: FieldProps) => {
  switch (props.type) {
    case FieldType.TextInput: {
      return <TextInputField {...props} />;
    }
    case FieldType.DatePicker: {
      return <DatePickerField {...props} />;
    }
    case FieldType.Camera: {
      return <CameraField {...props} />;
    }
    case FieldType.Dropdown: {
      return <DropDownField {...props} />;
    }
    default:
      return null;
  }
};

export default Field;

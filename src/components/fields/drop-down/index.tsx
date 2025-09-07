import { Dropdown, MultiSelectDropdown } from "react-native-paper-dropdown";
import { DropDownFieldProps } from "./typings";

export default function (props: DropDownFieldProps) {
  const { isMulti } = props;
  if (isMulti) {
    return <MultiSelectDropdown {...props} />;
  } else {
    return <Dropdown {...props} />;
  }
}

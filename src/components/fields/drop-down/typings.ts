import { Option } from "react-native-paper-dropdown";
import { BaseFieldProps, FieldType } from "../typings";

export interface DropdownOption {
  label: string;
  value: string;
}
interface SingleSelectDropDownFieldProps extends BaseFieldProps {
  value: string;
  type: FieldType.Dropdown;
  onSelect: (value?: string) => void;
  isMulti: false;
  options: Option[];
}

interface MultiSelectDropDownFieldProps extends BaseFieldProps {
  value: string[];
  type: FieldType.Dropdown;
  onChange: (value?: string[]) => void;
  isMulti: true;
  options: Option[];
}

export type DropDownFieldProps =
  | SingleSelectDropDownFieldProps
  | MultiSelectDropDownFieldProps;

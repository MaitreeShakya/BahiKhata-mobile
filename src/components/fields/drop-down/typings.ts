import { Option } from "react-native-paper-dropdown";
import { BaseFieldProps, FieldType } from "../typings";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface onSelectProps {
  name?: string;
  value?: string | string[];
}

interface SingleSelectDropDownFieldProps extends BaseFieldProps {
  value: string;
  type: FieldType.Dropdown;
  onSelect: (props: onSelectProps) => void;
  isMulti: false;
  options: Option[];
  name?: string;
}

interface MultiSelectDropDownFieldProps extends BaseFieldProps {
  value: string[];
  type: FieldType.Dropdown;
  onSelect: (props: onSelectProps) => void;
  isMulti: true;
  options: Option[];
  name?: string;
}

export type DropDownFieldProps =
  | SingleSelectDropDownFieldProps
  | MultiSelectDropDownFieldProps;

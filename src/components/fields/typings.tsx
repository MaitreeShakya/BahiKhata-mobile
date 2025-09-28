import { KeyboardTypeOptions } from "react-native";
import { DropDownFieldProps, onSelectProps } from "./drop-down/typings";

export enum FieldType {
  TextInput = "TextInput",
  DatePicker = "DatePicker",
  Camera = "Camera",
  Dropdown = "Dropdown",
}

export interface BaseFieldProps {
  label: string;
}

export interface OnChangeProps {
  name: string;
  value: string;
}

export interface TextInputFieldProps extends BaseFieldProps {
  value: string;
  onChange: (props: OnChangeProps) => void;
  type: FieldType.TextInput;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  right?: React.ReactNode;
  left?: React.ReactNode;
  name?: string;
}

export interface DatePickerFieldProps extends BaseFieldProps {
  value: string;
  onChange: (props: OnChangeProps) => void;
  type: FieldType.DatePicker;
  name?: string;
}

interface SingleCameraFieldProps extends BaseFieldProps {
  onCapture: (image: string[]) => void;
  isMulti: true;
  type: FieldType.Camera;
  value: string[];
  name?: string;
}

interface MultiCameraFieldProps extends BaseFieldProps {
  onCapture: (image: string) => void;
  isMulti: false;
  type: FieldType.Camera;
  value: string;
  name?: string;
}

export type CameraFieldProps = SingleCameraFieldProps | MultiCameraFieldProps;

export type FieldProps =
  | TextInputFieldProps
  | DatePickerFieldProps
  | CameraFieldProps
  | DropDownFieldProps;

export type OnChangePropsType = OnChangeProps | onSelectProps;

import { KeyboardTypeOptions } from "react-native";
import { TextInputProps } from "react-native-paper";

export enum FieldType {
  TextInput = "TextInput",
  DatePicker = "DatePicker",
  Camera = "Camera",
}

export interface BaseFieldProps {
  label: string;
}

export interface TextInputFieldProps extends BaseFieldProps {
  value: string;
  onChange: (text: string) => void;
  type: FieldType.TextInput;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export interface DatePickerFieldProps extends BaseFieldProps {
  value: string;
  onChange: (value: string) => void;
  type: FieldType.DatePicker;
}

export interface SingleCameraFieldProps extends BaseFieldProps {
  onCapture: (image: string[]) => void;
  isMulti: true;
  type: FieldType.Camera;
  value: string[];
}

export interface MultiCameraFieldProps extends BaseFieldProps {
  onCapture: (image: string) => void;
  isMulti: false;
  type: FieldType.Camera;
  value: string;
}

export type CameraFieldProps = SingleCameraFieldProps | MultiCameraFieldProps;

export type FieldProps =
  | TextInputFieldProps
  | DatePickerFieldProps
  | CameraFieldProps;

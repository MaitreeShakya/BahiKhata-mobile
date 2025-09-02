export enum FieldType {
  TextInput = "TextInput",
  DatePicker = "DatePicker",
}

export interface BaseFieldProps {}

export interface TextInputFieldProps extends BaseFieldProps {
  value: string;
  onChange: (text: string) => void;
  type: FieldType.TextInput;
}

export interface DatePickerFieldProps extends BaseFieldProps {
  value: Date;
  onChange: (value: Date) => void;
  type: FieldType.DatePicker;
}

export type FieldProps = TextInputFieldProps | DatePickerFieldProps;

import { TextInput } from "react-native-paper";
import { DropdownOption } from "./typings";

interface Props {
  value: DropdownOption;
  onRemove: (value: DropdownOption) => void;
}

export const SelectedOption = ({ value, onRemove }: Props) => {
  const { label } = value;

  const handleRemove = () => {
    onRemove(value);
  };

  return (
    <TextInput
      value={label}
      right={<TextInput.Icon icon="close" onPress={handleRemove} />}
      style={{ marginTop: 4, backgroundColor: "#f0f0f0" }}
      mode="outlined"
      textColor="#000"
      dense
      editable={false}
    />
  );
};

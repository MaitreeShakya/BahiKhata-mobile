import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { DropdownOption } from "./typings";

interface Props {
  item: DropdownOption;
  isSelected?: boolean;
}
export const OptionItem = ({ item, isSelected }: Props) => {
  const style = [styles.option, isSelected && styles.selectedOption];
  return (
    <Pressable onPress={() => {}}>
      <Text key={item.value} style={style}>
        {item.label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  option: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedOption: {
    backgroundColor: "#e0e0e0",
  },
});

import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { DropdownOption } from "./typings";

interface Props {
  item: DropdownOption;
  isSelected?: boolean;
  onPress: (item: DropdownOption) => void;
}
export const OptionItem = ({ item, isSelected, onPress }: Props) => {
  const style = [styles.option, isSelected && styles.selectedOption];

  const handlePress = () => {
    onPress(item);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
    >
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
    color: "#000000",
  },
  selectedOption: {
    backgroundColor: "#90EE90",
  },
});

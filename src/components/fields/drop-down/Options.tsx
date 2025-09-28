import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import Modal from "../../modal";
import { Text } from "react-native-paper";
import { DropdownOption } from "./typings";
import { OptionItem } from "./OptionItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  value: string | string[];
  isMulti: boolean;
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
  onClose: () => void;
}

const Options = ({ options, onSelect, onClose, isMulti, value }: Props) => {
  const renderItem = ({ item, index }: ListRenderItemInfo<DropdownOption>) => {
    const isSelected = isMulti
      ? (value as string[]).includes(item.value)
      : item.value === value;
    return (
      <OptionItem item={item} isSelected={isSelected} onPress={onSelect} />
    );
  };

  return (
    <Modal>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text variant="titleMedium" style={styles.title}>
              Please select an option:
            </Text>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="red"
              onPress={onClose}
            />
          </View>
          <FlatList data={options} renderItem={renderItem} />
        </View>
      </View>
    </Modal>
  );
};

export default Options;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    maxHeight: "80%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});

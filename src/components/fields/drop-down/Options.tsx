import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Modal from "../../modal";
import { Text } from "react-native-paper";
import { DropdownOption } from "./typings";
import { OptionItem } from "./OptionItem";

interface Props {
  options: DropdownOption[];
}

const renderItem = ({ item, index }: ListRenderItemInfo<DropdownOption>) => {
  const isSelected = index % 2 === 0 && true;
  return <OptionItem item={item} isSelected={isSelected} />;
};

const Options = ({ options }: Props) => {
  return (
    <Modal>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
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

});

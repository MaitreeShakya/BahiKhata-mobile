import { DropDownFieldProps } from "./typings";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useState } from "react";
import Options from "./Options";

export default function (props: DropDownFieldProps) {
  const { isMulti, options } = props;
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const icon = showDropDown ? "chevron-right" : "chevron-down";

  return (
    <View style={styles.container}>
      <Text variant="labelMedium" style={styles.label}>
        {props.label}:
      </Text>
      <TextInput
        editable={false}
        mode="outlined"
        right={<TextInput.Icon icon={icon} />}
        onPress={toggleDropDown}
        style={styles.textInput}
      />
      {showDropDown && <Options options={options} onSelect={() => {}} onClose={toggleDropDown} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  label: {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: "white",
  },
});

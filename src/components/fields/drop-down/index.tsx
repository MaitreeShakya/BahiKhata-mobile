import { Dropdown, MultiSelectDropdown } from "react-native-paper-dropdown";
import { DropDownFieldProps } from "./typings";
import { StyleSheet, View } from "react-native";
import { Portal, Text } from "react-native-paper";

export default function (props: DropDownFieldProps) {
  const { isMulti } = props;
  console.log("Dropdown props:", props.options);
  return (
    <View style={styles.container}>
      <Text variant="labelMedium" style={styles.label}>
        {props.label}:
      </Text>
      {isMulti ? (
        <MultiSelectDropdown
          {...props}
          mode="outlined"
          menuContentStyle={styles.dropdown}
        />
      ) : (
        <Dropdown
          {...props}
          mode="outlined"
          menuContentStyle={styles.dropdown}
        />
      )}
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
  dropdown: {
    backgroundColor: "#ffffff",
  },
});

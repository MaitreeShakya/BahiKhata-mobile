import { StyleSheet, View } from "react-native";
import { TextInputFieldProps } from "../typings";
import { TextInput, Text } from "react-native-paper";

const TextInputField = ({
  label,
  keyboardType,
  multiline,
  left,
  right,
}: TextInputFieldProps) => {
  return (
    <View style={styles.container}>
      <Text variant="labelMedium" style={styles.label}>
        {label}:
      </Text>
      <TextInput
        style={multiline ? styles.multilineInput : styles.input}
        mode="outlined"
        textColor="#000000"
        activeOutlineColor="#6200ee"
        keyboardType={keyboardType}
        multiline={multiline}
        right={right}
        left={left}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  label: {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#ffffff",
  },
  multilineInput: {
    height: 120,
    backgroundColor: "#ffffff",
  },
});

export default TextInputField;

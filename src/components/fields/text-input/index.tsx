import { StyleSheet, View } from "react-native";
import { TextInputFieldProps } from "../typings";
import { TextInput } from "react-native-paper";

const TextInputField = ({
  label,
  keyboardType,
  multiline,
}: TextInputFieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={multiline ? styles.multilineInput : styles.input}
        placeholder="Enter text"
        mode="outlined"
        label={label}
        textColor="#000000"
        activeOutlineColor="#6200ee"
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  input: {
    backgroundColor: "#ffffff",
  },
  multilineInput: {
    height: 120,
    backgroundColor: "#f0f0f0",
  },
});

export default TextInputField;

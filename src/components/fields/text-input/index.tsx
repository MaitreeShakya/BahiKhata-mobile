import { StyleSheet, TextInput } from "react-native";
import { TextInputFieldProps } from "../typings";

const TextInputField = ({}: TextInputFieldProps) => {
  return <TextInput style={styles.input} placeholder="Enter text" />;
};

const styles = StyleSheet.create({
  input: {},
});

export default TextInputField;

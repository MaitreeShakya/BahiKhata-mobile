import { StyleSheet, View } from "react-native";

interface FormProps {
    children: React.ReactNode;
}

const Form = ({ children }: FormProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Form;

const styles = StyleSheet.create({
  container: {},
});

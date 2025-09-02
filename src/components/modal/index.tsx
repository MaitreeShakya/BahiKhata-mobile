import { Modal, StyleSheet, View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

export default function ({ children }: Props) {
  return (
    <Modal transparent>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

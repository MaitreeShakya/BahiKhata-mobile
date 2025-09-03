import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";

interface Props {
  onClose: () => void;
}

export const CameraHeader = ({ onClose }: Props) => {
  const ICON_SIZE = 30;
  return (
    <View style={styles.container}>
      <IconButton icon="close" size={ICON_SIZE} onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

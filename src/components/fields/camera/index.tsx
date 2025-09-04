import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CameraFieldProps } from "../typings";
import { Button, Text } from "react-native-paper";
import Camera from "../../camera";

const CameraField = ({ isMulti, onCapture }: CameraFieldProps) => {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  const toggleCamera = () => {
    setShowCamera((prev) => !prev);
  };

  const handleCapture = (image: string) => {
    setCapturedImages((prev) => [...prev, image]);
  };

  const handleDone = () => {
    if (isMulti) {
      onCapture(capturedImages);
    } else {
      onCapture(capturedImages[0]);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="labelMedium" style={styles.label}>
        Receipt:
      </Text>
      <Button
        onPress={toggleCamera}
        mode="outlined"
        icon={"camera"}
        textColor="#000000"
      >
        Open Camera
      </Button>
      {showCamera && (
        <Camera
          mode={"picture"}
          onCapture={handleCapture}
          onDismiss={toggleCamera}
        />
      )}
    </View>
  );
};

export default CameraField;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  label: {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 4,
  },
});

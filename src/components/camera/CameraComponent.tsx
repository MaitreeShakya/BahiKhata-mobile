import { StyleSheet, View } from "react-native";
import Modal from "../modal";
import { CameraType, CameraView, FlashMode } from "expo-camera";
import { CameraHeader } from "./CameraHeader";
import { CameraFooter } from "./CameraFooter";
import { useRef, useState } from "react";
import { CameraComponentProps } from "./typings";

export const CameraComponent = ({
  onCapture,
  onDismiss,
  mode,
}: CameraComponentProps) => {
  const [facingMode, setFacingMode] = useState<CameraType>("back");
  const [flashMode, setFlashMode] = useState<FlashMode>("auto");

  const cameraRef = useRef<CameraView>(null);

  const toggleFacingMode = () => {
    setFacingMode((prev) => (prev === "back" ? "front" : "back"));
  };

  const nextFlashMode: Record<FlashMode, FlashMode> = {
    auto: "on",
    on: "off",
    off: "auto",
  };

  const switchFlashMode = () => {
    setFlashMode((prev) => nextFlashMode[prev]);
  };

  return (
    <Modal>
      <View style={styles.container}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing={facingMode}
          flash={flashMode}
          mode={mode}
          ratio="4:3"
        />
        <CameraHeader onClose={onDismiss} />
        <CameraFooter
          cameraRef={cameraRef}
          mode={mode}
          flash={flashMode}
          onFlipPress={toggleFacingMode}
          onCapturePress={onCapture}
          onFlashPress={switchFlashMode}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

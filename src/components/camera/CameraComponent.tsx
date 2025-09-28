import { StyleSheet } from "react-native";
import Modal from "../modal";
import { CameraType, CameraView, FlashMode } from "expo-camera";
import { CameraHeader } from "./CameraHeader";
import { CameraFooter } from "./CameraFooter";
import { useRef, useState } from "react";
import { CameraComponentProps } from "./typings";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
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
});

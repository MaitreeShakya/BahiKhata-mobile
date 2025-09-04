import { CameraMode, CameraView, FlashMode } from "expo-camera";
import { RefObject, useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

interface CameraFooterProps {
  cameraRef: RefObject<CameraView | null>;
  mode: CameraMode;
  flash: FlashMode;
  onFlipPress: () => void;
  onCapturePress: (photo: string) => void;
  onFlashPress: () => void;
}

export const CameraFooter = ({
  cameraRef,
  flash,
  mode,
  onFlipPress,
  onCapturePress,
  onFlashPress,
}: CameraFooterProps) => {
  const camera = cameraRef.current;

  const [isRecording, setIsRecording] = useState(false);

  const ICON_SIZE = 30;
  const SHUTTER_ICON_SIZE = 60;

  const flashIcon =
    flash === "on" ? "flash" : flash === "off" ? "flash-off" : "flash-auto";
  const facingIcon = "camera-flip";

  const handlePhotoCapture = async () => {
    const { uri } = await camera!.takePictureAsync({
      quality: 0.5,
      base64: true,
    });
  };

  const startRecording = async () => {
    setIsRecording(true);
    await camera!
      .recordAsync({})
      .then((video) => {
        if (video) {
          setIsRecording(false);
          onCapturePress(video.uri);
        }
      })
      .catch((error) => {
        console.error("Error recording video:", error);
        setIsRecording(false);
      });
  };

  const stopRecording = async () => {
    camera!.stopRecording();
  };

  const handleVideoCapture = async () => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const handleCapture = async () => {
    if (camera) {
      if (mode === "picture") {
        handlePhotoCapture();
      } else if (mode === "video") {
        handleVideoCapture();
      }
    }

    onCapturePress("photo");
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon={facingIcon}
        size={ICON_SIZE}
        onPress={onFlipPress}
        iconColor="#fff"
      />
      <IconButton
        icon="circle-slice-8"
        size={SHUTTER_ICON_SIZE}
        onPress={handleCapture}
        iconColor="#fff"
      />
      <IconButton
        icon={flashIcon}
        size={ICON_SIZE}
        onPress={onFlashPress}
        iconColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 30,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

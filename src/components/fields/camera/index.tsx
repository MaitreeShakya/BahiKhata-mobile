import { useState } from "react";
import { View } from "react-native";
import { CameraFieldProps } from "../typings";
import { Button } from "react-native-paper";
import Camera from "../../camera";

const CameraField = ({ isMulti, onCapture }: CameraFieldProps) => {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [showCamera, setShowCamera] = useState(false);

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
    <View>
      <Button onPress={toggleCamera}>Open Camera</Button>
      {showCamera && <Camera />}
    </View>
  );
};

export default CameraField;

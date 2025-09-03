import { CameraMode } from "expo-camera";

export interface CameraComponentProps {
  mode: CameraMode;
  onCapture: (photo: string) => void;
  onDismiss: () => void;
}

import { useCameraPermissions } from "expo-camera";

export const requestPermissions = async () => {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  const requestPermissions = async () => {
    await requestCameraPermission();
  };

  return { cameraPermission, requestPermissions };
};

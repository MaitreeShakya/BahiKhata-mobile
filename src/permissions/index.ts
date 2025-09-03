import { useCameraPermissions } from "expo-camera";

export const requestPermissions = () => {
  const [permission, requestCameraPermission] = useCameraPermissions();

  const cameraPermission = (permission && permission.granted) || false;

  const askAllPermissions = async () => {
    await requestCameraPermission();
  };

  return { cameraPermission, askAllPermissions };
};

import { requestPermissions } from "../../permissions";
import { NoCameraPermission } from "./NoCameraPermission";
import { CameraComponent } from "./CameraComponent";
import { CameraMode } from "expo-camera";
import { CameraComponentProps } from "./typings";

export default function (props: CameraComponentProps) {
  const { cameraPermission } = requestPermissions();

  if (!cameraPermission) {
    return <NoCameraPermission />;
  } else {
    return <CameraComponent {...props} />;
  }
}

import { IconButton, IconButtonProps } from "react-native-paper";

interface Props extends IconButtonProps {}

export default function (props: Props) {
  return <IconButton {...props} />;
}

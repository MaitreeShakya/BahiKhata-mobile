import { Divider, DividerProps } from "react-native-paper";

interface Props extends DividerProps {}

export default function (props: Props) {
  return <Divider {...props} />;
}

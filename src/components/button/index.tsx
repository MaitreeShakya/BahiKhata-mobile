import { Button, ButtonProps } from "react-native-paper";

interface Props extends ButtonProps {}

export default function (props: Props) {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
}

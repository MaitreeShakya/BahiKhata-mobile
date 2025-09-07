import { FAB, FABProps, Portal } from "react-native-paper";

type Props = FABProps & {};

export default function (props: Props) {
  return (
    <Portal>
      <FAB {...props} />
    </Portal>
  );
}

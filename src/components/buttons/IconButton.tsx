import { Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends PressableProps {
  iconName?: keyof typeof MaterialIcons.glyphMap;
}

export default function IconButton({ onPress, iconName, ...rest }: Props) {
  return (
    <Pressable onPress={onPress} {...rest}>
      <MaterialIcons name={iconName || "add"} size={24} color="black" />
    </Pressable>
  );
}

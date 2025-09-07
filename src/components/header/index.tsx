import { Pressable, StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import Menu, { MenuRef } from "../menu";
import { useRef } from "react";
import { useAuth } from "../../feature/auth/hooks/useAuth";

interface Props {
  avatarUrl?: string;
}

export default function Header({ avatarUrl }: Props) {
  const { logout } = useAuth();
  const menuRef = useRef<MenuRef>(null);

  const avatarSource = avatarUrl
    ? { uri: avatarUrl }
    : require("../../../assets/logo.png");

  const menuItems = [
    { title: "Profile", onPress: () => {} },
    { title: "Settings", onPress: () => {} },
    { title: "Logout", onPress: logout },
  ];

  const handleAnchorPress = () => {
    if (menuRef.current) {
      menuRef.current.openMenu();
    }
  };

  const anchor = (
    <Pressable onPress={handleAnchorPress}>
      <Avatar.Image size={40} source={avatarSource} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={{ color: "#6200ee" }}>
        BahiKhata
      </Text>
      <Menu ref={menuRef} items={menuItems} anchor={anchor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});

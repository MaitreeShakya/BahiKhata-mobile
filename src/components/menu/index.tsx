import React, { forwardRef, useImperativeHandle } from "react";
import { Menu } from "react-native-paper";

interface Props {
  anchor?: React.ReactNode;
  items: { title: string; onPress: () => void }[];
}

export type MenuRef = {
  openMenu: () => void;
};

const MenuComponent = forwardRef<MenuRef, Props>(
  ({ items, anchor }: Props, ref) => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    useImperativeHandle(ref, () => ({
      openMenu,
    }));

    return (
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={anchor}
        anchorPosition="bottom"
      >
        {items.map((item, index) => (
          <Menu.Item key={index} title={item.title} onPress={item.onPress} />
        ))}
      </Menu>
    );
  }
);

export default MenuComponent;

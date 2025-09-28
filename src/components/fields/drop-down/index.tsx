import { DropDownFieldProps, DropdownOption } from "./typings";
import { Pressable, StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useState } from "react";
import Options from "./Options";
import { SelectedOption } from "./SelectedOption";

export default function (props: DropDownFieldProps) {
  const { options, isMulti, value, name, onSelect } = props;
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const icon = showDropDown ? "chevron-right" : "chevron-down";

  const handleSelect = (option: DropdownOption) => {
    if (isMulti) {
      const currentValue = value as string[];
      const optionIndex = currentValue.indexOf(option.value);
      if (optionIndex > -1) {
        const newValue = currentValue.filter((val) => val !== option.value);
        onSelect({ name, value: newValue });
      } else {
        onSelect({ name, value: [...currentValue, option.value] });
      }
    } else {
      onSelect({ name, value: option.value });
      setShowDropDown(false);
    }
  };

  const handleRemoveSelected = (option: DropdownOption) => {
    if (isMulti) {
      const currentValue = value as string[];
      const newValue = currentValue.filter((val) => val !== option.value);
      onSelect({ name, value: newValue });
    } else {
      onSelect({ name, value: "" });
    }
  };

  const renderSelectedValue = () => {
    if (isMulti) {
      const selectedOptions = options.filter((opt) =>
        (value as string[]).includes(opt.value)
      );
      return selectedOptions.map((opt, index) => (
        <SelectedOption
          key={`selected-${index}`}
          onRemove={handleRemoveSelected}
          value={opt}
        />
      ));
    } else {
      const selectedOption = options.find((opt) => opt.value === value);
      return (
        selectedOption && (
          <SelectedOption
            onRemove={handleRemoveSelected}
            value={selectedOption}
          />
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="labelMedium" style={styles.label}>
        {props.label}:
      </Text>
      <Pressable onPress={toggleDropDown}>
        <TextInput
          editable={false}
          mode="outlined"
          right={<TextInput.Icon icon={icon} onPress={toggleDropDown} />}
          style={styles.textInput}
          placeholder="Select an option"
        />
      </Pressable>
      {renderSelectedValue()}

      {showDropDown && (
        <Options
          value={props.value}
          isMulti={isMulti}
          options={options}
          onSelect={handleSelect}
          onClose={toggleDropDown}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  label: {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: "white",
  },
});

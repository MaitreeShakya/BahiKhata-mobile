import { Pressable, StyleSheet, View } from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { DatePickerFieldProps } from "../typings";
import { DateUtility } from "../../../utilities";
import { useState } from "react";
import { TextInput } from "react-native-paper";

const DatePickerField = ({ value, onChange }: DatePickerFieldProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const onOpen = () => setShowPicker(true);
  const onClose = () => setShowPicker(false);

  const onValueChange = (
    evt: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (evt.type === "dismissed") {
      onClose();
    } else {
      if (selectedDate) {
        const formattedDate = DateUtility.formatDateToString(selectedDate);
        onChange(formattedDate);
      }
    }
  };

  const formattedDate = DateUtility.parseDate(value);

  return (
    <View style={styles.container}>
      <Pressable onPress={onOpen}>
        <TextInput
          label="Date"
          value={DateUtility.formatDate(formattedDate)}
          editable={false}
          mode="outlined"
          right={<TextInput.Icon icon="calendar" color="black" />}
          style={{ backgroundColor: "white" }}
          textColor="black"
        />
      </Pressable>
      {showPicker && (
        <RNDateTimePicker value={formattedDate} onChange={onValueChange} />
      )}
    </View>
  );
};

export default DatePickerField;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

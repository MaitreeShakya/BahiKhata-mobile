import { StyleSheet, View } from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { DatePickerFieldProps } from "../typings";

const DatePickerField = ({ value, onChange }: DatePickerFieldProps) => {
  const onValueChange = (
    evt: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <RNDateTimePicker value={value} onChange={onValueChange} />
    </View>
  );
};

export default DatePickerField;

const styles = StyleSheet.create({
  container: {},
});

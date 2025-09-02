import { StyleSheet, View } from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { DatePickerFieldProps } from "../typings";
import { DateUtility } from "../../../utilities";

const DatePickerField = ({ value, onChange }: DatePickerFieldProps) => {
  const onValueChange = (
    evt: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (selectedDate) {
      const formattedDate = DateUtility.formatDateToString(selectedDate);
      onChange(formattedDate);
    }
  };

  const formattedDate = DateUtility.parseDate(value);

  return (
    <View style={styles.container}>
      <RNDateTimePicker value={formattedDate} onChange={onValueChange} />
    </View>
  );
};

export default DatePickerField;

const styles = StyleSheet.create({
  container: {},
});

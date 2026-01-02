import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

type DatepickerProps = {
  selectedDate?: DateType;
  onDateSelect: (date: DateType) => void;
};

export default function Datepicker({
  selectedDate,
  onDateSelect,
}: DatepickerProps) {
  const defaultStyles = useDefaultStyles();

  return (
    <DateTimePicker
      mode="single"
      date={selectedDate}
      onChange={({ date }) => onDateSelect(date)}
      styles={defaultStyles}
    />
  );
}

import { parseISO, format } from "date-fns";
import { enUS } from "date-fns/locale";

type Props = {
  dateString: string;
};

// Use fixed locale so server and client render the same (avoids hydration mismatch)
const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: enUS })}
    </time>
  );
};

export default DateFormatter;

import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";

const Calendar = ({
  startDateState,
  handleDateSelect,
  startDate,
  endDate,
  setStartDate,
  addDays,
  blackoutDate,
}) => {
  const [excludeDates, setExcludeDays] = useState([]);
  useEffect(() => {
    blackoutDate && setExcludeDays(blackoutDate.map((x) => new Date(x)));
  }, [blackoutDate]);
  return (
    <DatePicker
      selected={startDateState}
      onSelect={handleDateSelect}
      minDate={new Date()}
      maxDate={endDate ? new Date(endDate) : addDays(new Date(startDate), 150)}
      onChange={(date) => setStartDate(date)}
      excludeDates={excludeDates}
      inline
    />
  );
};

export default Calendar;

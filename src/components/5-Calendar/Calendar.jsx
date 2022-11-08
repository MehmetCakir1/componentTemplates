import React, { useState } from "react";
import Calendar from "react-calendar";

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      {/* <h1 className="main-title">CALENDAR</h1> */}
        <Calendar onChange={onChange} value={value} />
    </>
  );
};

export default Calendar;

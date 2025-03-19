import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarOverview = () => {
  const [events, setEvents] = useState([
    {
      title: "Summer Break",
      start: new Date(2024, 5, 3), // June 3, 2024
      end: new Date(2024, 5, 10),  // June 10, 2024
      type: "announcement",
    },
    {
      title: "Exam Week",
      start: new Date(2024, 5, 15),
      end: new Date(2024, 5, 20),
      type: "exam",
    },
  ]);

  // Dynamic styling based on event type
  const eventStyleGetter = (event) => {
    let backgroundColor = event.type === "announcement" ? "#f8bbd0" : "#90caf9"; // Pink for announcement, Blue for exam
    return {
      style: {
        backgroundColor,
        color: "black",
        borderRadius: "6px",
        padding: "4px",
        border: "none",
      },
    };
  };

  // Handle adding new events (optional)
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, start, end, type: "custom" }]);
    }
  };

  return (
    <div className="p-[1rem] mt-[1rem] bg-background rounded-[10px]">
      <h2 className="text-lg font-bold mb-[1rem]">📅 Academic Schedule</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable // Allows users to click and add events
        onSelectSlot={handleSelect} // Adds event when selecting a date range
        eventPropGetter={eventStyleGetter} // Custom styling for events
      />
    </div>
  );
};

export default CalendarOverview;

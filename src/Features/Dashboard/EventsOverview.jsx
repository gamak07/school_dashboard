import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Webinar on Career Trends for Class-X",
    date: "23, Jun",
    time: "11:00 AM",
  },
  {
    id: 2,
    title: "Webinar on Career Trends for Class-X",
    date: "23, Jun",
    time: "11:00 AM",
  },
  {
    id: 3,
    title: "Webinar on Career Trends for Class-X",
    date: "23, Jun",
    time: "11:00 AM",
  },
];

const EventsOverview = () => {
  return (
    <div className="bg-background p-[1rem] mt-[1rem] rounded-[10px]">
      <h2 className="font-bold mb-[1rem]">Upcoming Events</h2>
      <div className="">
        {events.map((event) => (
          <div key={event.id} className="p-[5px] border border-lightgray rounded-[10px]">
            <h3 className="font-semibold">{event.title}</h3>
            <div className="text-text flex items-center gap-[8px] mt-1">
              <span className="flex items-center gap-[4px]">
                <FaCalendarAlt className="w-4 h-4 text-text" /> {event.date}
              </span>
              <span className="flex items-center gap-[4px]">
                <FaClock className="w-4 h-4 text-text" /> {event.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsOverview;

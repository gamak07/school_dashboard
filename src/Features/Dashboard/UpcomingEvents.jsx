import React from "react";
import Button from "../../Components/Button";
import { FaPlus } from "react-icons/fa";

const UpcomingEvents = () => {
  const events = [
    {
      name: "Science Fair",
      month: "Apr",
      date: 10,
      type: "Event",
    },
    {
      name: "Mid-Term Exams",
      month: "Apr",
      date: 15,
      type: "Exam",
    },
    {
      name: "Parent-Teacher Meeting",
      month: "Apr",
      date: 22,
      type: "Meeting",
    },
    {
      name: "Sports Day",
      month: "Apr",
      date: 30,
      type: "Event",
    },
  ];
  return (
    <div className="bg-white rounded-[10px] p-[1rem] w-1/3">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] text-black font-bold">Upcoming Events</h1>
        <Button className="flex items-center gap-[5px] py-[5px] px-[8px] rounded-[5px] text-[15px] text-indigo hover:text-indigolight">
          <span>
            <FaPlus />
          </span>
          Add
        </Button>
      </div>

      <div className="mt-[1rem] flex flex-col gap-[10px]">
        {events.map((event) => (
          <div key={event.name} className="flex items-center gap-[10px]">
            <div className="bg-lightblue flex flex-col items-center justify-center rounded-[5px] h-[4rem] w-[4rem]">
              <p className="text-indigo text-[14px]">{event.month}</p>
              <p className="text-indigo text-[14px]">{event.date}</p>
            </div>
            <div>
              <h3 className="text-black text-[18px] font-semibold">{event.name}</h3>
              <p className="text-darkgray text-[15px]">{event.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

import { FaUsers, FaClock, FaUserMinus, FaUserClock } from "react-icons/fa";

const stats = [
  {
    title: "Total Students Present",
    value: 120,
    change: "↑ 5%",
    description: "from yesterday",
    icon: <FaUsers className="text-blue-500 text-xl" />,
    changeColor: "text-green-500",
  },
  {
    title: "Late Arrivals Today",
    value: 15,
    change: "+ 3 people",
    description: "compared to last week",
    icon: <FaUserClock className="text-blue-500 text-xl" />,
    changeColor: "text-green-500",
  },
  {
    title: "Students Absent",
    value: 8,
    change: "↓ 2 people",
    description: "compared to last Monday",
    icon: <FaUserMinus className="text-blue-500 text-xl" />,
    changeColor: "text-red-500",
  },
  {
    title: "Average Check-In Time",
    value: "08:25 AM",
    change: "Consistent",
    description: "with last week",
    icon: <FaClock className="text-blue-500 text-xl" />,
    changeColor: "text-gray-500",
  },
];

const StudentsAttendanceStats = () => {
  return (
    <div className="grid grid-cols-4 gap-[8px] p-[1rem]">
      {stats.map((stat, index) => (
        <div key={index} className="bg-secondary p-[10px] rounded-[10px] flex flex-col gap-[2px]">
          <div className="flex items-center gap-2">
            {stat.icon}
            <span className="text-gray-700 font-semibold">{stat.title}</span>
          </div>
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className={`text-sm ${stat.changeColor}`}>{stat.change}</div>
          <div className="text-xs text-gray-500">{stat.description}</div>
        </div>
      ))}
    </div>
  );
}

export default StudentsAttendanceStats

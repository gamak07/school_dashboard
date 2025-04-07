import React from "react";
import Button from "../../Components/Button";
import { MdImage } from "react-icons/md";

const RecentActivities = () => {
  const activities = [
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      name: "Idris Sulaimon",
      role: "Teacher",
      activity: "Uploaded 2nd term results for JSS1",
      dateTime: "5 hours ago",
      status: "Completed",
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      name: "Ayodele Ariyo",
      role: "Admin",
      activity: "Created new exam schedule",
      dateTime: "7 hours ago",
      status: "Completed",
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      name: "Hassan Stephanie",
      role: "Finance Officer",
      activity: "Processed fee payment for 15 students",
      dateTime: "yesterday",
      status: "Completed",
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      name: "Oriyomi Josephine",
      role: "Principal",
      activity: "Approved leave request",
      dateTime: "2 days ago",
      status: "Completed",
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      name: "Tunde Kamoru",
      role: "Teacher",
      activity: "Marked Attendance for JSS3",
      dateTime: "2 days ago",
      status: "Completed",
    },
  ];
  return (
    <div className="bg-white rounded-[10px] p-[1rem]">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-bold text-black">Recent Activities</h1>
        <Button className="text-indigo text-[15px]">View All</Button>
      </div>

      <div className="mt-[1rem]">
        <table className="table-auto w-full ">
          <thead className="bg-lightgray text-darkgray border-b-1 border-darkgray">
            <tr className="">
              <th className="text-left py-[10px] px-[1rem]">USER</th>
              <th className="text-left py-[10px]">ACTIVITY</th>
              <th className="text-left py-[10px]">DATE & TIME</th>
              <th className="text-left py-[10px]">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-lightgray divide-y-1">
            {activities.map((activity) => (
              <tr key={activity.name}>
                <td className="flex items-center gap-[10px] py-[10px] px-[1rem]">
                  <div className="h-[2rem] w-[2rem] rounded-full">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="h-full w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-black">
                      {activity.name}
                    </h3>
                    <p className="text-[15px] text-darkgray">{activity.role}</p>
                  </div>
                </td>
                <td className="py-[10px] text-[15px] text-darkgray">
                  {activity.activity}
                </td>
                <td className="py-[10px] text-[15px] text-darkgray">
                  {activity.dateTime}
                </td>
                <td className={"py-[10px] text-[15px] text-darkgray"}>
                  <p
                    className={`w-fit rounded-[15px] p-[4px] ${
                      activity.status === "Completed"
                        ? "bg-green text-lightgreen"
                        : activity.status === "Pending"
                        ? "bg-orange text-lightorange"
                        : activity.status === "Rejected"
                        ? "bg-red text-lightred"
                        : ""
                    }`}
                  >
                    {activity.status}
                  </p>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivities;

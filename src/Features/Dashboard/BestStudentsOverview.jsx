import React from "react";

const facultyList = [
  {
    id: 1,
    name: "Suchita Sachdeva",
    subject: "Mathematics",
    className: "Class XI",
    image: "https://randomuser.me/api/portraits/women/1.jpg", // Replace with actual image
  },
  {
    id: 2,
    name: "Suchita Sachdeva",
    subject: "Mathematics",
    className: "Class XI",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Suchita Sachdeva",
    subject: "Mathematics",
    className: "Class XI",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 4,
    name: "Suchita Sachdeva",
    subject: "Mathematics",
    className: "Class XI",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const BestStudentsOverview = () => {
  return (
    <div className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
      <h2 className="text-lg font-bold mb-[1rem]">Best Students</h2>
      <div className="space-y-4">
        {facultyList.map((faculty) => (
          <div key={faculty.id} className="flex items-center p-[5px] border border-lightgray gap-[5px] rounded-[10px]">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-[2.5rem] h-[2.5rem] rounded-full object-cover border"
            />
            <div className="ml-3">
              <h3 className="font-semibold">{faculty.name}</h3>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                📄 {faculty.subject} | 🎓 {faculty.className}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestStudentsOverview;

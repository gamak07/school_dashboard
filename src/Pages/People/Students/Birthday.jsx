import React, { useState, useEffect } from 'react';
import { FaBirthdayCake, FaSave } from 'react-icons/fa';

const Birthday = () => {
  // Sample data of students
  const [students] = useState([
    { id: 1, name: 'Alice Johnson', dob: '2008-03-26' },
    { id: 2, name: 'Bob Smith', dob: '2007-03-27' },
    { id: 3, name: 'Charlie Brown', dob: '2006-04-01' },
    { id: 4, name: 'Daisy Parker', dob: '2007-12-25' },
    // Add more students as needed
  ]);

  // State for the birthday message template
  const [messageTemplate, setMessageTemplate] = useState(
    'Happy Birthday, [Name]! Wishing you a wonderful day and a fantastic year ahead.'
  );

  // Derived states
  const [todaysBirthdays, setTodaysBirthdays] = useState([]);
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // 0-based in JS
    const currentDay = today.getDate();

    // Separate out today's birthdays vs. upcoming
    const todayList = [];
    const upcomingList = [];

    students.forEach((student) => {
      // Convert student DOB to a JS Date
      const dob = new Date(student.dob);
      const dobMonth = dob.getMonth() + 1;
      const dobDay = dob.getDate();

      if (dobMonth === currentMonth && dobDay === currentDay) {
        todayList.push(student);
      } else {
        upcomingList.push(student);
      }
    });

    setTodaysBirthdays(todayList);
    setUpcomingBirthdays(upcomingList);
  }, [students]);

  // Handler to save the updated template
  const handleSaveTemplate = () => {
    // In a real app, you'd likely save this to your backend
    alert('Birthday message template saved!');
  };

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header */}
      <header className="mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Birthday Page</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem]">
        {/* Left Panel: Today's Birthdays */}
        <section className="md:col-span-2 bg-background p-[1rem] rounded-[10px]">
          <h2 className="text-[20px] font-bold mb-[1rem] flex items-center">
            <FaBirthdayCake className="mr-[3px] text-orange" />
            Today's Birthdays
          </h2>

          {todaysBirthdays.length > 0 ? (
            <ul>
              {todaysBirthdays.map((student) => (
                <li key={student.id} className="mb-[1rem]">
                  <div className="font-semibold text-[25px] text-darkgray">
                    {student.name}
                  </div>
                  <div className="text-darkgray">
                    Birthday: {new Date(student.dob).toLocaleDateString()}
                  </div>
                  {/* Example: Display the message that will be automatically sent */}
                  <div className="mt-[6px] bg-lightgray p-[4px] rounded-[10px] border-2 border-darkgray">
                    <p className="text-darkgray text-[15px] italic">
                      {messageTemplate.replace('[Name]', student.name)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-darkgray">No birthdays today.</p>
          )}

          <hr className="my-[1rem]" />

          {/* Upcoming Birthdays (optional) */}
          <h2 className="text-[20px] font-bold mb-[1rem]">Upcoming Birthdays</h2>
          {upcomingBirthdays.length > 0 ? (
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-[2px] px-[2px]">Name</th>
                  <th className="py-[2px] px-[2px]">Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {upcomingBirthdays.map((student) => (
                  <tr key={student.id} className="border-b">
                    <td className="py-[2px] px-[2px]">{student.name}</td>
                    <td className="py-[2px] px-[2px]">
                      {new Date(student.dob).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-darkgray">No upcoming birthdays.</p>
          )}
        </section>

        {/* Right Panel: Edit Birthday Message Template */}
        <section className="bg-background p-[1rem] rounded-[10px]">
          <h2 className="text-[20px] font-bold mb-[1rem]">Birthday Message Template</h2>
          
          <textarea
            rows={8}
            value={messageTemplate}
            onChange={(e) => setMessageTemplate(e.target.value)}
            className="w-full border-2 border-lightgray rounded p-[5px] mb-[1rem] outline-none"
          />
          <button
            onClick={handleSaveTemplate}
            className="bg-secondary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent flex items-center"
          >
            <FaSave className="mr-[3px]" />
            Save Template
          </button>
        </section>
      </div>
    </div>
  );
};

export default Birthday;

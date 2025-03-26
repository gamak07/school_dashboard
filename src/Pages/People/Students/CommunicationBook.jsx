import React, { useState } from 'react';
import { FaPlusCircle, FaPaperPlane, FaBell } from 'react-icons/fa';

const CommunicationBook = () => {
  // State for announcements
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Welcome Back to School',
      message: 'Classes resume on Monday. Please be punctual!',
      date: '2025-03-26',
    },
  ]);
  // State for new announcement
  const [newTitle, setNewTitle] = useState('');
  const [newMessage, setNewMessage] = useState('');

  // State for sending notifications
  const [selectedRecipients, setSelectedRecipients] = useState('All Students');
  const [notificationMessage, setNotificationMessage] = useState('');

  // State for communication log
  const [communicationLog, setCommunicationLog] = useState([
    {
      id: 1,
      type: 'Notification',
      recipients: 'Grade 10',
      content: 'Remember to submit your science project.',
      date: '2025-03-25',
    },
  ]);

  // Handle creation of a new announcement
  const handleAddAnnouncement = () => {
    if (!newTitle.trim() || !newMessage.trim()) return;
    const newAnnouncement = {
      id: Date.now(),
      title: newTitle,
      message: newMessage,
      date: new Date().toISOString().split('T')[0], // e.g. 2025-03-26
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setNewTitle('');
    setNewMessage('');
    // Optionally, log this action
    setCommunicationLog([
      {
        id: Date.now(),
        type: 'Announcement',
        recipients: 'All Students',
        content: newMessage,
        date: newAnnouncement.date,
      },
      ...communicationLog,
    ]);
  };

  // Handle sending a notification
  const handleSendNotification = () => {
    if (!notificationMessage.trim()) return;
    // Logic to send notification (e.g. email, SMS) would go here
    alert(`Notification sent to ${selectedRecipients}: ${notificationMessage}`);
    // Add to communication log
    setCommunicationLog([
      {
        id: Date.now(),
        type: 'Notification',
        recipients: selectedRecipients,
        content: notificationMessage,
        date: new Date().toISOString().split('T')[0],
      },
      ...communicationLog,
    ]);
    // Reset form
    setSelectedRecipients('All Students');
    setNotificationMessage('');
  };

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header */}
      <header className="mb-[1rem] p-[1rem] bg-background rounded-[10px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Communication Center</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] bg-background rounded-[10px] p-[1rem] mb-[1rem]">
        {/* Announcements Section */}
        <section className="p-[1rem]">
          <h2 className="text-[20px] font-bold mb-[10px]">Announcements</h2>
          <div className="mb-[1rem]">
            <label className="block text-darkgray">Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Announcement Title"
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
            />
          </div>
          <div className="mb-[1rem]">
            <label className="block text-darkgray">Message</label>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write your announcement here..."
              rows={3}
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
            />
          </div>
          <button
            onClick={handleAddAnnouncement}
            className="bg-secondary text-background rounded-[10px] px-[8px] py-[5px] hover:bg-accent flex items-center"
          >
            <FaPlusCircle className="mr-[3px]" />
            Post Announcement
          </button>

          {/* List of Announcements */}
          <div className="mt-[1rem]">
            <h3 className="text-[20px] font-semibold mb-[10px]">Recent Announcements</h3>
            {announcements.map((item) => (
              <div key={item.id} className="border-b border-lightgray pb-[6px] mb-[6px]">
                <h4 className="font-bold text-text">{item.title}</h4>
                <p className="text-darkgray">{item.message}</p>
                <p className="text-[15px] text-lightgray">Posted on: {item.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Send Notifications Section */}
        <section className="p-[1rem]">
          <h2 className="text-[20px] font-bold mb-[10px]">Send Notifications</h2>
          <div className="mb-[1rem]">
            <label className="block text-darkgray">Recipients</label>
            <select
              value={selectedRecipients}
              onChange={(e) => setSelectedRecipients(e.target.value)}
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
            >
              <option value="All Students">All Students</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-[1rem]">
            <label className="block text-darkgray">Message</label>
            <textarea
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={3}
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
            />
          </div>
          <button
            onClick={handleSendNotification}
            className="bg-secondary text-background rounded-[10px] px-[8px] py-[5px] hover:bg-accent flex items-center"
          >
            <FaPaperPlane className="mr-[3px]" />
            Send Notification
          </button>
        </section>
      </div>

      {/* Communication Log Section */}
      <section className="p-[1rem] rounded-[10px] bg-background mb-[1rem]">
        <h2 className="text-[20px] font-bold mb-[10px]">Communication Log</h2>
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-2">Type</th>
              <th className="py-2 px-2">Recipients</th>
              <th className="py-2 px-2">Content</th>
              <th className="py-2 px-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {communicationLog.map((log) => (
              <tr key={log.id} className="border-b">
                <td className="py-[2px] px-[2px]">
                  {log.type === 'Notification' ? (
                    <span className="inline-flex items-center text-green">
                      <FaBell className="mr-[2px]" />
                      {log.type}
                    </span>
                  ) : (
                    <span className="text-orange">{log.type}</span>
                  )}
                </td>
                <td className="py-[2px] px-[2px]">{log.recipients}</td>
                <td className="py-[2px] px-[2px]">{log.content}</td>
                <td className="py-[2px] px-[2px]">{log.date}</td>
              </tr>
            ))}
            {communicationLog.length === 0 && (
              <tr>
                <td colSpan="4" className="py-[5px] text-center">
                  No communication history found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CommunicationBook;

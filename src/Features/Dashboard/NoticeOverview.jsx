import React from "react";

const NoticeOverview = () => {
    const notices = [
        {
            title:'Result for JSS1 is out',
            time: 'Today, 11AM'
        },
        {
            title:'Result for JSS2 is out',
            time: 'Today, 11AM'
        },
        {
            title:'Result for SSS1 is out',
            time: 'Today, 11AM'
        },
        {
            title:'Result for SSS2 is out',
            time: 'Today, 11AM'
        },
    ]
  return (
    <div className="w-full h-fit bg-background rounded-[10px] p-[1rem]">
      <p className="text-text font-bold mb-1rem">Notice Overview</p>
      <div className="border border-lightgray h-[30vh] overflow-y-auto">
        {notices.map((notice, i)=>(
            <div key={i} className="">
                <p className="text-accent underline text-[14px]">{notice.title}</p>
                <p className="text-text text-[14px]">{notice.time}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeOverview;

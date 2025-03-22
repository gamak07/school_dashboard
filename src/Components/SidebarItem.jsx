import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSubmenus = item.subs || item.subSubs || item.subSubSubs;

  return (
    <div className="w-full">
      <div
        tabIndex={0}
        className="flex justify-between items-center cursor-pointer font-bold focus:bg-darkgray focus:text-background 
                   bg-background text-text hover:bg-lightgray hover:text-text"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.link ? (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `w-full ${isActive ? "bg-darkgray text-background" : ""}`
            }
          >
            {item.name}
          </NavLink>
        ) : (
          <span>{item.name}</span>
        )}
        {hasSubmenus && (
          <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span> // Toggle icon
        )}
      </div>

      {/* Render submenus */}
      {isOpen && (
        <div className="pl-[8px] border-l-2 border-lightgray">
          {item.subs &&
            item.subs.map((sub, index) => (
              <SidebarItem key={index} item={sub} />
            ))}
          {item.subSubs &&
            item.subSubs.map((sub, index) => (
              <SidebarItem key={index} item={sub} />
            ))}
          {item.subSubSubs &&
            item.subSubSubs.map((sub, index) => (
              <SidebarItem key={index} item={sub} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
